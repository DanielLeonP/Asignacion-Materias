import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { useNavigate } from "react-router-dom";

export const CreateExcel = ({ excelData, fileName }) => {
    const navigate = useNavigate();
    const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const exportToCSV = (excelData, fileName) => {
        let confirmacion = window.confirm("¿Deseas exportar tus datos y salir?");
        if(confirmacion){
            const ws = XLSX.utils.json_to_sheet(excelData);
            const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
            const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
            const data = new Blob([excelBuffer], { type: fileType });
            FileSaver.saveAs(data, fileName + fileExtension);
            localStorage.clear();
            navigate("/form");
        }
    };

    return (
        <button className="btn-excel-export" onClick={(e) => exportToCSV(excelData, fileName)}>Export</button>
    );
};
