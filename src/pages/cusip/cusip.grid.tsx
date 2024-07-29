import React, {
  useCallback,
  useMemo,
  useState,
} from "react";
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

interface GridData {
  fromCursip: string;
  toCusip: string;
  symbol: string;
  securityDescription: string;
  effectiveDate: string;
  status: string;
}

const GridExample = ({ onSelection }: { onSelection: (value: boolean) => void}) => {
  const gridStyle = useMemo(() => ({ height: "calc(100% - 150px)", width: "calc(100% - 120px)" }), []);
  const rowData: GridData[] = [
    { fromCursip: '123456', toCusip: '654321', symbol: 'AAPL', securityDescription: 'Apple Inc.', effectiveDate: '2024-01-01', status: 'All' },
    { fromCursip: '234567', toCusip: '765432', symbol: 'GOOGL', securityDescription: 'Alphabet Inc.', effectiveDate: '2024-01-15', status: 'Pending' },

    { fromCursip: '546567', toCusip: '765432', symbol: 'DXC', securityDescription: 'DXC', effectiveDate: '2024-04-03', status: 'Completed' },

    { fromCursip: '866456', toCusip: '453345', symbol: 'OD', securityDescription: 'One Drive', effectiveDate: '2024-05-20', status: 'Error' }
  ];
  const columnDefs: ColDef<GridData>[] = [
    {
      headerCheckboxSelection: true,
      checkboxSelection: true,
      width: 50,
      pinned: 'left',
      filter: false
    },
    {
      headerName: 'From CUSIP',
      field: 'fromCursip',
      filter: 'agTextColumnFilter', // Header filter for text input
      minWidth: 100
    },
    {
      headerName: 'To CUSIP',
      field: 'toCusip',
      filter: 'agTextColumnFilter', // Header filter for text input
      minWidth: 50
    },
    {
      headerName: 'Symbol',
      field: 'symbol',
      filter: 'agTextColumnFilter', // Header filter for text input
      minWidth: 80
    },
    {
      headerName: 'Description',
      field: 'securityDescription',
      filter: 'agTextColumnFilter', // Header filter for text input
      minWidth: 150
    },
    {
      headerName: 'Effective Date',
      field: 'effectiveDate',
      filter: 'agDateColumnFilter', // Header filter for date input
      minWidth: 150
    },
    {
      headerName: 'Status',
      field: 'status',
      filter: 'agTextColumnFilter', // Header filter for text input
      minWidth: 80
    }
  ];
  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      filter: true,
    };
  }, []);

  const onSelectionChanged = (event: any) => {
    const selectedNodes = event.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node: any) => node.data);
    console.log('Selected Rows:', selectedData);
    if(selectedData && selectedData.length > 0) {
      onSelection(true);
    } else {
      onSelection(false);
    }
  };

  return (
    <div
      style={gridStyle}
      className={
        "ag-theme-quartz absolute"
      }
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        onSelectionChanged={onSelectionChanged}
      />
    </div>
  );
};

export default React.memo(GridExample);