/**
 * Generate a CSV file data
 *
 * @param  {Array} header - Array with header values
 * @param {Array} rows - Array with rows values
 */
export class CsvWriter {
    constructor(header) {
        this.header = header;
        this.rows = [];
    }

    /**
     * Set a new row to table
     *
     * @param  {Array} row - Adding a new row
     */
    addRow(row) {
        this.rows.push(row);
    }

    /**
     * Set new rows to table
     *
     * @param  {Array} rows - Adding new rows
     */
    addRows(rows) {
        this.rows.push(...rows);
    }

    /**
     * Return complete csv result already encoded
     */
    data() {
        let result = this._createCsvLine(this.header);
        for (let row of this.rows) {
            result += this._createCsvLine(row);
        }
        return result;
    }

    /**
     * Create anchor element pointing to CSV data and click on it
     */
    anchorElement(fileName) {
        let anchor = document.createElement("a"),
            blob = new Blob(["", this.data()]),
            referer = URL.createObjectURL(blob);
        anchor.download = `${fileName}.csv`;
        anchor.href = referer;
        anchor.click();
    }

    /**
     * Create a csv line
     *
     * @param  {Array} value - Array of values
     */
    _createCsvLine(row) {
        let encodedRow = [];
        for (let value of row) {
            value = (value == null ? "" : value).toString();
            if (value.search(/[",\n]/) >= 0) { // Force quotation
                value = '"' + value.replace(/"/g, '""') + '"'; // Escape quotes
            }
            encodedRow.push(value);
        }
        return encodedRow.join(",") + "\n";
    }
}
