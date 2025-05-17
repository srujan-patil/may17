const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {
    name: 'Srujan Panthula',
    role: 'Cloud & DevOps Engineer',
    about: 'Passionate about automating infrastructure using Docker, Kubernetes, Jenkins, and Ansible.'
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Portfolio running on port ${port}`));

