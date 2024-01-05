import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled,
} from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";

import { categories } from "../../constants/data";
// import logo from "../image/logo.jpg";

const StyledTable = styled(Table)`
  border: 1px solid rgba(224, 224, 224, 1);
`;

const StyledButton = styled(Button)`
  margin: 20px;
  width: 85%;
  background: #169793;
  color: #fff;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Categories = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <>
      <StyledLink
        to={`/create?category=${category || ""}`}
        style={{ textDecoration: "none" }}
      >
        <StyledButton variant="contained">Upload Records</StyledButton>
      </StyledLink>

      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell>
              {/* <img style={{ maxHeight: "25px" }} src={logo} alt="" /> */}
              <StyledLink to={"/"}>All Medical Records</StyledLink>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>
                {/* <img style={{ maxHeight: "25px" }} src={logo} alt="" /> */}
                <StyledLink to={`/?category=${category.type}`}>
                  {category.type}
                </StyledLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </>
  );
};

export default Categories;