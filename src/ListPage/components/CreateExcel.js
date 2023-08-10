// import * as FileSaver from "file-saver";
import * as XLSX from "xlsx-js-style";
import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const CreateExcel = ({ excelData, fileName, estado, changeEstado, changeNotificacion }) => {
    const navigate = useNavigate();
    // const fileType =
    //     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    // const fileExtension = ".xlsx";

    const activarNotificacion = () => {
        changeNotificacion(true);
    }

    const exportToXLSX = useCallback((excelData, fileName) => {
        let centerAll = {vertical: "center", horizontal: "center", wrapText: true};
        let fontNormal = {sz: 12, name: "Arial"};
        let fontBold = {sz: 14, name: "Arial", bold: true};
        let borderAll= {top: {style: "thin", color: "000000"}, bottom: {style: "thin", color: "000000"}, left: {style: "thin", color: "000000"}, right: {style: "thin", color: "000000"}};
        let headerTable = {font: {bold: true, sz: 12, name: "Arial"}, alignment: {vertical: "bottom", horizontal: "center", wrapText: true}, border: borderAll, fill: {fgColor:{ rgb:"AEAAAA"}}};
        let rowGreen = {font: fontNormal, alignment: centerAll, border: borderAll, fill: {fgColor:{ rgb:"92D050"}}};
        let rowBlue = {font: fontNormal, alignment: centerAll, border: borderAll, fill: {fgColor:{ rgb:"00B0F0"}}};
        let rowNavy = {font: fontNormal, alignment: centerAll, border: borderAll, fill: {fgColor:{ rgb:"8EA9DB"}}};
        let rowLight = {font: fontNormal, alignment: centerAll, border: borderAll, fill: {fgColor:{ rgb:"DDEBF7"}}};
        let header = ["", "", {v: "Grado", t: "s", s: headerTable}, {v: "CLAVE", t: "s", s: headerTable}, {v: "Profesor", t: "s", s: headerTable}, {v: "Tipo", t: "s", s: headerTable}, {v: "Nivel", t: "s", s: headerTable}, {v: "# Mat que\ntiene", t: "s", s: headerTable}, {v: "Asignadas", t: "s", s: headerTable}, {v: "Faltan", t: "s", s: headerTable}, {v: "Practicas", t: "s", s: headerTable}, {v: "Observaciones", t: "s", s: headerTable}];

        let dataTC = []; let dataTL = []; let dataH = []; let tam = 0;
        for (let i = 0; i < excelData[0].length; i++) {
            dataTC.push([i+1, "", {v: excelData[0][i][0], t: "s", s: rowGreen}, {v: excelData[0][i][1], t: "n", s: rowBlue}, {v: excelData[0][i][2], t: "s", s: rowNavy}, {v: excelData[0][i][3], t: "s", s: rowGreen}, {v: excelData[0][i][4], t: "s", s: rowGreen}, {v: excelData[0][i][5], t: "n", s: rowGreen}, {v: excelData[0][i][6], t: "n", s: rowGreen}, {v: excelData[0][i][7], t: "n", s: rowGreen}, {v: excelData[0][i][8], t: "n", s: {font: fontNormal, alignment: centerAll, border: borderAll}}, {v: excelData[0][i][9], t: "s", s: {font: fontNormal, alignment: centerAll, border: borderAll}}]);
            tam = i;
        }
        for (let i = 0; i < excelData[1].length; i++) {
            dataTL.push([i+1, "", {v: excelData[1][i][0], t: "s", s: rowGreen}, {v: excelData[1][i][1], t: "n", s: rowBlue}, {v: excelData[1][i][2], t: "s", s: rowNavy}, {v: excelData[1][i][3], t: "s", s: rowLight}, {v: excelData[1][i][4], t: "s", s: rowLight}, {v: excelData[1][i][5], t: "n", s: rowGreen}, {v: excelData[1][i][6], t: "n", s: rowGreen}, {v: excelData[1][i][7], t: "n", s: rowLight}, {v: excelData[1][i][8], t: "n", s: {font: fontNormal, alignment: centerAll, border: borderAll}}, {v: excelData[1][i][9], t: "s", s: {font: fontNormal, alignment: centerAll, border: borderAll}}]);
        }
        for (let i = 0; i < excelData[2].length; i++) {
            dataH.push([i+1, "", {v: excelData[2][i][0], t: "s", s: rowGreen}, {v: excelData[2][i][1], t: "n", s: rowBlue}, {v: excelData[2][i][2], t: "s", s: rowNavy}, {v: excelData[2][i][3], t: "s", s: rowLight}, {v: excelData[2][i][4], t: "s", s: rowLight}, {v: excelData[2][i][5], t: "n", s: rowLight}, {v: excelData[2][i][6], t: "n", s: rowGreen}, {v: excelData[2][i][7], t: "n", s: rowLight}, {v: excelData[2][i][8], t: "n", s: {font: fontNormal, alignment: centerAll, border: borderAll}}, {v: excelData[2][i][9], t: "s", s: {font: fontNormal, alignment: centerAll, border: borderAll}}]);
        }
        const fecha = new Date();
        let periodo = fecha.getMonth()+1 >= 7 ? "JULIO-DICIEMBRE" : "ENERO-JUNIO";
        let ano = fecha.getMonth()+1 >= 7 ? fecha.getFullYear().toString() + "-02" : fecha.getFullYear().toString() + "-01";

        let data = [
            ["", "", "", "", {v: `Carga Horaria ${ano}`, t: "s", s: {font: {bold: true, sz: 18, name: "Arial"}, alignment: centerAll }}],
            ["", "", "", "", {v: periodo, t: "s", s: {font: {sz: 14, name: "Arial"}, alignment: centerAll}}], [],
            ["", "", "", "", {v: "Tiempos Completos", t: "s", s: {alignment: centerAll, font: fontBold}}], header, ["", "", "", "", "", "", "", {f: `SUM(I9:I${tam+9})`, t: "n", s: {font: fontNormal, alignment: centerAll, border: borderAll}}, {f: `SUM(J9:J${tam+9})`, t: "n", s: {font: fontNormal, alignment: centerAll, border: borderAll}}, {f: `I${tam+10}-J${tam+10}`, t: "n", s: {font: fontNormal, alignment: centerAll, border: borderAll}}], [], [], [], [], ["", "", "", "", {v: "Tiempos Libres", t: "s", s: {alignment: centerAll, font: fontBold}}], header, [], ["", "", "", "", {v: "Honorarios", t: "s", s: {alignment: centerAll, font: fontBold}}], header
        ]
        data.splice(5, 0, ...dataTC);
        data.splice((tam + 13), 0, ...dataTL);
        data.splice(data.length, 0, ...dataH);

        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(data, {origin: "B4"});
        ws['!cols'] = [{"wch":2}, {"wch":10}, {"wch":8}, {"wch":14}, {"wch":12}, {"wch":50}, {"wch":17}, {"wch":37}, {"wch":13}, {"wch":13}, {"wch":8}, {"wch":12}, {"wch":188}]
        XLSX.utils.book_append_sheet(wb, ws, "Asignación Materias");
        XLSX.writeFile(wb, fileName + ".xlsx");
        localStorage.clear();
        navigate("/form");

        // const newData = excelData[0].concat(excelData[1], excelData[2]);
        // const ws = XLSX.utils.json_to_sheet(newData);
        // const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        // const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        // const data = new Blob([excelBuffer], { type: fileType });
        // FileSaver.saveAs(data, fileName + fileExtension);
    }, [navigate]);

    useEffect(() => {
        function verEstado(){
            if(estado){
                changeEstado(false)
                changeNotificacion(false)
                exportToXLSX(excelData, fileName)
            }else{
                changeNotificacion(false)
            }
        }
        verEstado()
    }, [estado])

    return (
        <button className="btn-excel-export" onClick={activarNotificacion}>Export</button>
    );
};
