import { app } from './server';

const PORT = process.env.PORT || 4000;

app.listen(Number(PORT), '0.0.0.0', () => console.log('Server listening im port ' + PORT));
