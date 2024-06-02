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

import { readFileSync } from "fs";
import { statSync } from "fs";
import strftime from "strftime";

export function verifyFile(path) {
    const contents = readFileSync(path, "UTF8").split("\n");
    for (const line of contents) {
        if (line.startsWith("// Last updated: ")) {
            const modifiedTime = statSync(path).mtime;
            const year = modifiedTime.getFullYear();
            const month = modifiedTime.getMonth();
            const day = modifiedTime.getDate();
            const date = strftime("%Y-%m-%d", new Date(year, month, day, 0, 0, 0, 0));
            return date != line.slice(17, 28);
        }
    }
    return false;
};
