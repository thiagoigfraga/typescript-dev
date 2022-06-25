import { CadastroUsuario } from './Classes/CadastroUsuario';
import { Sexo } from './Classes/Sexo';
import { Endereco } from './Classes/Endereco';

const usuario1 = new CadastroUsuario(
    'Thiago',
    11234567891,
    123456789,
    Sexo.Masculino,
    new Endereco('Das laranjeiras', 12, 1234567, 'Das americas', 'Guarapuava')
);

const usuario2 = new CadastroUsuario(
    'Lucas',
    2318762377,
    9876543,
    Sexo.Masculino,
    new Endereco('Das Rosas', 64, 87654322, 'Centro', 'Pato Branco')
);

console.log(usuario1.nome);
console.log(usuario1.cpf);
console.log(usuario1.rg);
console.log(usuario1.endereco.bairro);

console.log(usuario2.nome);
