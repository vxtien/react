import HomePage from "./components/HomePage";
import Form from "./components/Form";
// import TodoApp from "./todoList/TodoApp";
import ExampleState from "./components/ExampleState";
import Cars from "./components/Cars";
import ColorBox from "./components/ColorBox";
import Counter from "./components/Counter";
import FeedbackForm from "./components/FeedbackForm";
import Form2 from "./components/Form2";
import TrafficLight from "./components/TrafficLight";
import MyButton from "./components/MyButton";
import MyForm from "./components/MyForm";
import Profile from "./components/Profile";
import RequestTracker from "./components/RequestTracker";
import ShoppingList from "./components/ShopppingList";
import AppToolBar from "./components/ToolBar";
import LightSwitch from "./components/LightSwitch";
import Gallery from "./components/UsersList";
import MyApp1 from "./components/UseState";
import MyApp from "./example/MyApp";
import TicTacToe from "./tictok/TicTacToe"
import Scoreboard from "./components/Scoreboard";
import Canvas from "./canvas/Canvas";
import ShoppingCart from "./components/ShoppingCart";

export const data = [
    {
        link: '/',
        title: 'Home',
        component: <HomePage/>
    },    
    {
        link: '/form',
        title: 'Form',
        component: <Form/>
    },
    {
        link: '/todo-app',
        title: 'TodoApp',
        // component: <TodoApp/>
    },
    {
        link: '/example-state',
        title: 'ExampleState',
        component: <ExampleState/>
    },
    {
        link: '/cars',
        title: 'Cars',
        component: <Cars/>
    },
    {
        link: '/color-box',
        title: 'ColorBox',
        component: <ColorBox/>
    },
    {
        link: '/counter',
        title: 'Counter',
        component: <Counter/>
    },    
    {
        link: '/Feedback-form',
        title: 'FeedbackForm',
        component: <FeedbackForm/>
    },  
    {
        link: '/form2',
        title: 'Form2',
        component: <Form2/>
    },  
    {
        link: '/traffic-light',
        title: 'TrafficLight',
        component: <TrafficLight/>
    },  
    {
        link: '/my-button',
        title: 'MyButton',
        component: <MyButton/>
    },  
    {
        link: '/my-form',
        title: 'MyForm',
        component: <MyForm/>
    },  
    {
        link: '/profile',
        title: 'Profile',
        component: <Profile/>
    },  
    {
        link: '/request-tracker',
        title: 'RequestTracker',
        component: <RequestTracker/>
    },  
    {
        link: '/shopping',
        title: 'ShoppingList',
        component: <ShoppingList/>
    },
    {
        link: '/app-tool',
        title: 'AppToolBar',
        component: <AppToolBar/>
    },  
    {
        link: '/light-switch',
        title: 'LightSwitch',
        component: <LightSwitch/>
    },    
    {
        link: '/gallery',
        title: 'Gallery',
        component: <Gallery/>
    },    
    {
        link: '/my-app1',
        title: 'MyApp1',
        component: <MyApp1/>
    },    
    {
        link: '/my-app',
        title: 'MyApp',
        component: <MyApp/>
    },    
    {
        link: '/tic-tac-toe',
        title: 'TicTacToe',
        component: <TicTacToe/>
    },      
    {
        link: '/shopping-cart',
        title: 'ShoppingCart',
        component: <ShoppingCart/>
    },
    {
        link: '/scoreboard',
        title: 'Scoreboard',
        component: <Scoreboard/>
    },
    {
        link: '/canvas',
        title: 'Canvas',
        component: <Canvas/>
    },
]