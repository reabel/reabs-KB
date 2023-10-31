import { useState, Fragment } from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../components/Title';
import { ingredient } from '../types';


export default function Ingredients() {

    const [ingredients, setIngredients] = useState<ingredient[]>([
        { 
            name: 'Ground Beef',
            type: 'Meat',
            amount: 500,
            amountUnit: 'Grams',
        },
        { 
            name: 'Salt',
            type: 'Spice',
            amount: 10,
            amountUnit: 'Grams',
        },
        { 
            name: 'Tomatoes',
            type: 'Vegetables & Fruit',
            amount: 20,
            amountUnit: 'Ounces',
        },
        { 
            name: 'Worschestire Sauce',
            type: 'Sauces',
            amount: 500,
            amountUnit: 'ml',
        },
    ]);

    function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
    }
    return (
        <Fragment>
            <Title>Ingredients</Title>
            <Table size="small">
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Type</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Unit</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {ingredients.map((ingredient) => (
                    <TableRow key={ingredient.name}>
                    <TableCell>{ingredient.name}</TableCell>
                    <TableCell>{ingredient.type}</TableCell>
                    <TableCell>{ingredient.amount}</TableCell>
                    <TableCell>{ingredient.amountUnit}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                See more ingredients
            </Link>
            <Link color="primary" href="ingredients/add" sx={{ mt: 3 }}>
                Add New Recipe
            </Link>
        </Fragment>
    );
}