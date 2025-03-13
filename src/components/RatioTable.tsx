import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const RatioTable = () => {
  const data = [
    { mc: "Turkey", aplCount: 209, aplApd: 54.74, processTime: 4.5 },
    { mc: "Cambodia", aplCount: 214, aplApd: 54.74, processTime: 4.5 },
    { mc: "Brazil", aplCount: 192, aplApd: 54.74, processTime: 4.5 },
    { mc: "China", aplCount: 321, aplApd: 54.74, processTime: 4.5 },
    { mc: "Germany", aplCount: 178, aplApd: 54.74, processTime: 4.5 },
    { mc: "Japan", aplCount: 256, aplApd: 54.74, processTime: 4.5 },
    { mc: "USA", aplCount: 400, aplApd: 54.74, processTime: 4.5 },
    { mc: "Canada", aplCount: 150, aplApd: 54.74, processTime: 4.5 },
    { mc: "Australia", aplCount: 220, aplApd: 54.74, processTime: 4.5 },
    { mc: "Russia", aplCount: 310, aplApd: 54.74, processTime: 4.5 },
    { mc: "France", aplCount: 190, aplApd: 54.74, processTime: 4.5 },
    { mc: "Italy", aplCount: 230, aplApd: 54.74, processTime: 4.5 },
    { mc: "Spain", aplCount: 210, aplApd: 54.74, processTime: 4.5 },
    { mc: "South Korea", aplCount: 280, aplApd: 54.74, processTime: 4.5 },
    { mc: "Mexico", aplCount: 170, aplApd: 54.74, processTime: 4.5 },
    { mc: "Argentina", aplCount: 140, aplApd: 54.74, processTime: 4.5 },
    { mc: "South Africa", aplCount: 200, aplApd: 54.74, processTime: 4.5 },
    { mc: "Nigeria", aplCount: 130, aplApd: 54.74, processTime: 4.5 },
    { mc: "Kenya", aplCount: 120, aplApd: 54.74, processTime: 4.5 },
    { mc: "Indonesia", aplCount: 260, aplApd: 54.74, processTime: 4.5 },
    { mc: "Malaysia", aplCount: 240, aplApd: 54.74, processTime: 4.5 },
    { mc: "Thailand", aplCount: 270, aplApd: 54.74, processTime: 4.5 },
    { mc: "Vietnam", aplCount: 250, aplApd: 54.74, processTime: 4.5 },
    { mc: "Philippines", aplCount: 180, aplApd: 54.74, processTime: 4.5 },
    { mc: "Bangladesh", aplCount: 160, aplApd: 54.74, processTime: 4.5 },
  ];
  return (
    <div>
      <Table className="bg-white shadow-lg rounded-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">MC</TableHead>
            <TableHead>APL Count</TableHead>
            <TableHead>APL-APD</TableHead>
            <TableHead>Process Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <span className="font-bold">{row.mc}</span>
              </TableCell>
              <TableCell>
                {" "}
                <span className="font-bold">{row.aplCount}</span>
              </TableCell>
              <TableCell>
                {" "}
                <span className="font-bold">{row.aplApd} % </span>
              </TableCell>
              <TableCell>
                {" "}
                <span className="font-bold">{row.processTime} </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RatioTable;
