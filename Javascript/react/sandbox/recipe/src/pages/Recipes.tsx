import { useState, Fragment } from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../components/Title';
import { recipe } from '../types';


export default function Recipes() {

    const [recipes, setRecipes] = useState<recipe[]>([
        { 
            name: 'Spaghetti', 
            ingredients: [
                {name: 'ground beef'}, {name: 'salt'}, {name: 'tomatoes'}
            ]
        },
        { 
            name: 'Hamburger', 
            ingredients: [
                {name: 'ground beef'}, {name: 'salt'}, {name: 'Worschestire Sauce'}
            ]
        }
    ]);

    function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
    }
    return (
        <Fragment>
            <Title>Recent Orders</Title>
            <Table size="small">
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Ingredients</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {recipes.map((recipe) => (
                    <TableRow key={recipe.name}>
                    <TableCell>{recipe.name}</TableCell>
                    <TableCell align="right">{recipe?.ingredients.map((ingredient) => (<div key={recipe + '-' + ingredient.name}>{ingredient.name}</div>))}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                See more recipes
            </Link>
            <Link color="primary" href="recipes/add" sx={{ mt: 3 }}>
                Add New Recipe
            </Link>
        </Fragment>
    );
}