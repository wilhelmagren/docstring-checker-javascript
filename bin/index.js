//
// MIT License
// 
// Copyright (c) 2024 Wilhelm Ågren
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
// File created: 2024-06-02
// Last updated: 2024-06-02
//

import { DocstringChecker } from "../src/DocstringChecker.js";

let root = process.argv[2];

if (typeof root === "undefined") {
    console.log(" 💥 You need to provide the path to search from as an argument!");
    process.exit(1);
}

const dc = new DocstringChecker(root);
const invalidFiles = dc.getInvalidFiles();

if (invalidFiles.length == 0) {
    console.log("\n 🎉 You have no outdated docstrings. Great job!");
} else {
    console.log("\n 🧸 You have " + invalidFiles.length + " outdated docstring(s) in total. Resolve these files:");
    for (const file of invalidFiles) {
        console.log("    - " + file);
    }
}

