import React, {Component} from "react";
import {AgGridReact} from "ag-grid-react";

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: this.createColumnDefs(),
            rowData: this.createRowData()
        }
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;

        this.gridApi.sizeColumnsToFit();
    }

    createColumnDefs() {
        return [
            {headerName: "Date", field: "Date"},
            {headerName: "BTC", field: "BTC"},
            {headerName: "BTC Available", field: "BTC Available"},
            {headerName: "BTC Collateral", field: "BTC Collateral"},
            {headerName: "BTC USD", field: "BTC USD"},
            {headerName: "ETH", field: "ETH"},
            {headerName: "ETH Available", field: "ETH Available"},
            {headerName: "ETH Collateral", field: "ETH Collateral"},
            {headerName: "ETH USD", field: "ETH USD"}
        ];
    }

    createRowData() {
        return [
            {
            'Date': '2/5/2018', 
            'BTC': 8542.25, 
            'BTC Available': 35000, 
            'BTC Collateral': 5621.36, 
            'BTC USD': 8569.54, 
            'ETH': 542.21, 
            'ETH Available': 54521.21, 
            'ETH Collateral': 4502.24, 
            'ETH USD': 2156.00 
            }
        ];
    }

    render() {
        let containerStyle = {
            height: 600,
            width: '100%'
        };

        return (
            <div style={containerStyle} className="ag-fresh">
                <h5>Account Activity</h5>
                <AgGridReact
                    // properties
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}

                    // events
                    onGridReady={this.onGridReady}>
                </AgGridReact>
            </div>
        )
    }
};
