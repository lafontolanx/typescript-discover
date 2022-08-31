//Tipagem explícita-----------------------------------------------------------
const Ticket = (user: string | null, ticket: number) => {
    return console.log(`Olá ${user ?? 'Usuário Padrão'}. O número do seu ticket é ${ticket}`)
}

Ticket(null, 1234)

//Any-------------------------------------------------------------------------
let info: any;

info = 'Laura Fontolan';
info = [1,2,3,4];
info = 10.50;
info = true;

const sum = (a: any, b: any) => a + b

sum( 1, 2 ) //3
sum( '1', 2) //12

//Inferência de tipos = tipagem implícita-------------------------------------
let userName = 'Laura'; //Ele tipa a variável de acordo com oconteúdo atribuído.

//Tipos primitivos
let loading: boolean;
loading = true;

let email: string;
email = 'laura_fontolan@hotmail.com'

let price: number;
price = 10.50;
price = 10;

//Arrays----------------------------------------------------------------------
let numbers: number[]; //Array<number>
numbers = [1,2,3,4,5];

let users: Array<string>;
users = ['João', 'Rodrigo', 'Pedro', 'Laura']

//Funções---------------------------------------------------------------------
function showMessages(message: string): void{ //Não tem return então é void.
    console.log(message);
}

function showComments(comment: string): string{
    return comment;
}

//Union-----------------------------------------------------------------------
const printUserId = (id: number | string) => { //O ID pode ser do tipo number OU do tipo string.
    console.log(`O ID do usuário é: ${id}`)
}

printUserId(1001);

//Generics--------------------------------------------------------------------
/**
 * Convenções para o generic
 * S => state
 * T => type
 * K => key
 * V => value 
 * E => element
 */

 function useState<T extends number | string = string>() { //se eu não defiir o tipo do generic ele irá assumir o tipo string
    let state: T;

    function get(){
        return state;
    }

    function set(newValue: T){
        state = newValue;
    }

    return { get, set };
}

let newState = useState();
newState.get()
newState.set('Laura')
// newState.set(1002)

//Type------------------------------------------------------------------------
type IdType = string | number | undefined;

let userId: IdType;
let adminId: IdType;

//Type Assertions-------------------------------------------------------------
type UserResponse = {
    name: string;
    avatar: string;
    id: number;
}

let userResponse = {} as UserResponse; //tipando dados vindos de uma api por exemplo.

//Objetos---------------------------------------------------------------------
//Opcional--------------------------------------------------------------------
type User = {
    name: string;
    email: string;
    age: number;
    isAdmin?: boolean; //com o ? o isAdmin é opcional dentro do objeto
}

const newUser: User = {
    name: 'Laura Fontolan',
    email: 'laura@email.com',
    age: 22 //posso ou não colocar o isAdmin aqui
}

//Intersecção de Tipos---------------------------------------------------------
type Account = {
    id: number;
    name: string;
}

type Char = {
    nickname: string;
    level: number;
}

type PlayerInfo = Account & Char;
let playerInfo: PlayerInfo = {
    name: 'Laura',
    id: 2,
    nickname: 'lafontolanx',
    level: 5
}

//Interface--------------------------------------------------------------------
interface Person {
    name: string;
    age: number;
    height: number;
}

let person: Person = {
    name: 'Pedro',
    age: 21,
    height: 180
}

//Type e Interface-------------------------------------------------------------
type TUser = {
    id: number;
    name: string;
}

type TPayment = {
    method: string;
}

type TAccount = TUser & TPayment;


interface IUser {
    id: number;
    name: string;
}

interface IPayment {
    method: string;
}

interface IAccount extends IUser, IPayment {}