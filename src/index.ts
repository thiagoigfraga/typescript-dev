type user =  {
    name: string;
    password: string;
    id: number;
}


const usuario: user = {
    name: 'Thiago',
    password: '123456',
    id: 1
}

function somaNumeros(num1: number, num2: number): void{

    console.log(`Soma de ${num1} + ${num2} = ${num1+num2}`);

}


somaNumeros(1,2);
