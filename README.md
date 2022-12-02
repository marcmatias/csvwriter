# CsvWriter

Simple csvwriter browser downloader generator JS

## Development

Docker container running lite-server and watching code changes

```bash
make watch
```

Results can be tested in demos:

- [http://localhost:3000/example/index.html](http://localhost:3000/index.html)

## Generate bundle

Local bundle pack with project name and actual project version in root folder

```bash
make bundle
```

## More

To see all make commands

```bash
make help
```

## Installation

```bash
yarn add csvwritergen
```

Or directly in the HTML file

```html
<!-- Add to the bottom of body HTML tag -->
<script src="./dist/csvwritergen.js"></script>

<!-- or directly from unpkg -->
<script src="https://unpkg.com/csvwritergen@latest/dist/csvwritergen.min.js"></script>
```

## Run

```js
// Utils library functions: toNormalForm and newElement can be imported here
import { CsvWriter } from "csvwritergen";

// Only this lines when included with script HTML tag
const csvwriter = new CsvWriter(header, rows);
await csvwriter.anchorElement("file-title");
```
