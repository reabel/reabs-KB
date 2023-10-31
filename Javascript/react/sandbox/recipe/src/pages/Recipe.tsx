import { Typography } from "@mui/material";
import { useState, Fragment } from 'react';
import { recipe } from '../types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



export default function Recipe() {
    const [recipe, setRecipe] = useState<recipe>({
        name: 'Spaghetti',
        ingredients: [
            {name: 'ground beef', type: 'meat', amount: 500, amountUnit: 'g'},
            {name: 'salt'}, {name: 'tomatoes'}
        ]
    });
    return (
        <Fragment>
            <h1>{recipe.name}</h1>
            <h2>Ingredients</h2>
            <Table size="small">
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Amount</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {recipe.ingredients?.map((ingredient) => (
                    <TableRow key={ingredient.name}>
                    <TableCell>{ingredient.name}</TableCell>
                    <TableCell>{ingredient.type}</TableCell>
                    <TableCell>{ingredient.amount || 'N/A'} {ingredient?.amountUnit}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Fragment>
    )
}