export default [
    {
        id: 'poa',
        type: 'input',
        data: { label: 'Plan Of Action' },
        position: { x: 0, y: 250 },
        style: { backgroundColor: '#6ede87', color: 'black', fontWeight: 'bold' },
    },
    {
        id: 'research',
        // you can also pass a React component as a label
        data: { label: <div>Research</div> },
        position: { x: 200, y: 70 },
        style: { backgroundColor: '#ff0072', color: 'white' },
    },
    {
        id: 'planning',
        data: { label: 'Planning' },
        position: { x: 200, y: 150 },
        style: { backgroundColor: 'lightseagreen', color: 'white' },
    },
    {
        id: 'designing',
        data: { label: 'Desigining' },
        position: { x: 200, y: 230 },
        style: { backgroundColor: 'gold', color: 'white' },
    },
    {
        id: 'manufacturing',
        data: { label: 'Manufacturing' },
        position: { x: 200, y: 310 },
        style: { backgroundColor: 'greenyellow', color: 'white' },
    },
    {
        id: 'sales/marketing',
        data: { label: 'Sales/Marketing' },
        position: { x: 200, y: 390 },
        style: { backgroundColor: 'hotpink', color: 'white' },
    },
    {
        id: 'research1',
        data: { label: 'External' },
        position: { x: 400, y: -60 },
        style: { backgroundColor: '#ff0072', color: 'white' },
    },
    {
        id: 'research2',
        type: 'output',
        data: { label: 'Internal' },
        position: { x: 400, y: 10 },
        style: { backgroundColor: '#ff0072', color: 'white' },
    },
    {
        id: 'planning1',
        type: 'output',
        data: { label: 'PRD' },
        position: { x: 400, y: 80 },
        style: { backgroundColor: 'lightseagreen', color: 'white' },
    },
    {
        id: 'planning2',
        type: 'output',
        data: { label: 'Specs' },
        position: { x: 400, y: 150 },
        style: { backgroundColor: 'lightseagreen', color: 'white' },
    },
    {
        id: 'designing1',
        type: 'output',
        data: { label: 'Hardware' },
        position: { x: 400, y: 220 },
        style: { backgroundColor: 'gold', color: 'white' },
    },
    {
        id: 'designing2',
        type: 'output',
        data: { label: 'Software' },
        position: { x: 400, y: 290 },
        style: { backgroundColor: 'gold', color: 'white' },
    },
    {
        id: 'manufacturing1',
        type: 'output',
        data: { label: 'Material' },
        position: { x: 400, y: 360 },
        style: { backgroundColor: 'greenyellow', color: 'white' },
    },
    {
        id: 'manufacturing2',
        type: 'output',
        data: { label: 'Production' },
        position: { x: 400, y: 430 },
        style: { backgroundColor: 'greenyellow', color: 'white' },
    },
    {
        id: 'sales/marketing1',
        type: 'output',
        data: { label: 'Online' },
        position: { x: 400, y: 500 },
        style: { backgroundColor: 'hotpink', color: 'white' },
    },
    {
        id: 'sales/marketing2',
        type: 'output',
        data: { label: 'Dealership' },
        position: { x: 400, y: 570 },
        style: { backgroundColor: 'hotpink', color: 'white' },
    },
    {
        id: 'external1',
        data: { label: 'B2B' },
        position: { x: 600, y: -20 },
        style: { backgroundColor: '#ff0072', color: 'white' },
    },
    {
        id: 'external2',
        type: 'output',
        data: { label: 'B2C' },
        position: { x: 600, y: 50 },
        style: { backgroundColor: '#ff0072', color: 'white' },
    },
    {
        id: 'B2B1',
        type: 'output',
        data: { label: 'Online' },
        position: { x: 800, y: -50 },
        style: { backgroundColor: '#ff0072', color: 'white' },
    },
    {
        id: 'B2B2',
        type: 'output',
        data: { label: 'Interview' },
        position: { x: 800, y: 10 },
        style: { backgroundColor: '#ff0072', color: 'white' },
    },
    {
        id: 'B2B3',
        type: 'output',
        data: { label: 'Public Data' },
        position: { x: 800, y: 70 },
        style: { backgroundColor: '#ff0072', color: 'white' },
    },
    {
        id: 'B2B4',
        type: 'output',
        data: { label: 'Health' },
        position: { x: 800, y: 130 },
        style: { backgroundColor: '#ff0072', color: 'white' },
    },
];
