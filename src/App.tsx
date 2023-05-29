import { useState } from 'react';
import "./App.css"
import {Layout, Menu, Card, Button, Input, Form} from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
} from '@ant-design/icons';
import FormItem from "antd/es/form/FormItem";
import {ComponentAdditional} from "./lab4";
import './lab5CSS.css';
import AddCardsList from "./lab5";
import {Link} from "react-router-dom";
const { Header, Content, Sider } = Layout;


type MenuItemKey = 'option1' | 'option2' | 'option3' | 'option4';

const menuItems: { key: MenuItemKey, icon: JSX.Element, label: string }[] = [
    { key: 'option1', icon: <PieChartOutlined />, label: 'Pepene Verde' },
    { key: 'option2', icon: <DesktopOutlined />, label: 'Pepene Galben' },
    { key: 'option3', icon: <FileOutlined />, label: 'Dovlecei' },
    { key: 'option4', icon: <FileOutlined />, label: 'Laborator5' }
];
const pepene: ComponentAdditional = {
    id: 0,
    type: 'Seminte de Pepene Verde',
    description: 'Adam F1 este un hibrid timpuriu de pepene verde ce prezinta o rezistenta foarte buna la transport. Fructul obtinut are coaja de culoare verde inchis, iar miezul rosu. Greutatea aproximativa a acestui soi de pepene este cuprinsa intre 9-11 Kg',
    age: 1,
    name: 'Adam F1',
    stockNumber: 12345,
    price: 99.99,
};

const pepene2: ComponentAdditional = {
    id: 1,
    type: 'Seminte de Pepene Verde',
    description: 'Crisby F1 este un hibrid de pepene verde extratimpuriu, apreciat si cultivat de majoritatea agricultorilor pentru calitatea excelenta. Unul dintre cele mai mari avantaje ale acestui tip de pepene este viteza mare de dezvoltare si productivitatea ridicata in diferite conditii de cultura.',
    age: 2,
    name: 'Crisby F1',
    stockNumber: 54321,
    price: 149.99,
};

const  melon: ComponentAdditional = {
    id: 2,
    type: 'Seminte de Pepene Galben',
    description: 'eminte de pepene galben Enza Zaden AHLAM F1 este un hibrid de tip ananas, puternic, cu o buna capacitate de pastrare in camp, putin mai tardiv decat restul hibrizilor din segmentul sau.',
    age: 2020,
    name: 'Ahlam F1',
    stockNumber: 23456,
    price: 699.99,

};

const melon2: ComponentAdditional = {
    id: 3,
    type: 'Seminte de Pepene Galben',
    description: 'Pepene galben de tip „Ananas” cu perioada de vegetaţie 70 de zile. Planta este viguroasă și fructifică masiv, producînd fructe inițial de culoare verde închis, iar la coacere galben-portocalii',
    age: 2021,
    name: 'Amal F1',
    stockNumber: 65432,
    price: 599.99,
};

const dovleac: ComponentAdditional = {
    id: 4,
    type: 'Seminte de Dovleac',
    description: 'Acest dovleac de vara verzui are forma de para si este originar din America Centrala, fiind utilizat in bucatariile americane, braziliene, indiene si filipineze',
    age: 2021,
    name: 'Dovlecel Chayote',
    stockNumber: 78901,
    price: 599.99,
};

const dovleac2: ComponentAdditional = {
    id: 5,
    type: 'Seminte de Dovleac',
    description: 'Cu forma de chitara si o coaja neimpresionanta coloristic, dovleacul placintar are un interior vibrant si dulce, care se transforma in supe crema delicioase (ca cea de mai jos), piureuri cremoase, mancaruri savuroase si deserturi aromate.',
    age: 2020,
    name: 'Dovleac Placintar',
    stockNumber: 10987,
    price: 549.99,
};

const componentsArray: ComponentAdditional[] = [pepene, pepene2, melon, melon2, dovleac, dovleac2];


const App: React.FC = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItemKey>('option1');

    const handleMenuSelect = (event: any) => {
        setSelectedMenuItem(event.key);
    };

    const renderCards = (componentsArray: ComponentAdditional[]) => {
        switch (selectedMenuItem) {
            case 'option1':
                return (
                    componentsArray.map((card) => (
                        <Card title={card.type} style={{ marginBottom: '16px' }} className={card.type === 'Seminte de Pepene Verde' ? '': 'hidden'}>
                            <p>{card.description}</p>
                        </Card>
                    ))
                );
            case 'option2':
                return (
                    componentsArray.map((card) => (
                        <Card title={card.type} style={{ marginBottom: '16px' }} className={card.type === 'Seminte de Pepene Galben' ? '': 'hidden'}>
                            <p>{card.description}</p>
                        </Card>
                    ))
                );
            case 'option3':
                return (
                    componentsArray.map((card) => (
                        <Card title={card.type} style={{ marginBottom: '16px' }} className={card.type === 'Seminte de Dovleac' ? '': 'hidden'}>
                            <p>{card.description}</p>
                        </Card>
                    ))
                );
            case 'option4':
                return (
                    <AddCardsList>Card</AddCardsList>
                )
            default:
                return null;
        }
    };

    const [nume, setNume] = useState('');
    const [prenume, setPrenume] = useState('');
    const [grupa, setGrupa] = useState('');

    return (
        <Layout style={{ minHeight: '100vh', backgroundColor: '#f1f1f1' }}>
            <Sider
                collapsible
                style={{ backgroundColor: '#1e1e2f', color: '#fff' }}
            >
                <div style={{ height: '32px', background: 'rgba(255, 255, 255, 0.2)', margin: '16px' }} />
                <Menu
                    theme="dark"
                    defaultSelectedKeys={['option1']}
                    mode="inline"
                    onSelect={handleMenuSelect}
                >
                    {menuItems.map(({ key, icon, label }) => (
                        <Menu.Item key={key} icon={icon}>
                            <Link to={`/${key}`}>{label}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{ padding: 0, background: '#fff' }}
                />
                <Content style={{ margin: '16px' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {renderCards(componentsArray)}
                    </div>
                    <Form>
                        <FormItem>
                            Nume: <Input
                            placeholder="Numele"
                            type="text"
                            required
                            value = {nume}
                            onChange={(e) => setNume(e.target.value)}
                        />
                        </FormItem>
                        <FormItem>
                            Prenume: <Input
                            placeholder="Prenumele"
                            type="text"
                            required
                            value = {prenume}
                            onChange = {(e) => setPrenume(e.target.value)}
                        />
                        </FormItem>
                        <FormItem>
                            Grupa: <Input
                            placeholder="Grupa"
                            type="text"
                            required
                            value = {grupa}
                            onChange = {(e) => setGrupa(e.target.value)}
                        />
                        </FormItem>
                        <Form.Item>
                            <Button type="primary" onClick={() => alert( "My name " + nume +  " " + prenume + " and " +
                                "my group " +  grupa )}>
                                Button
                            </Button>
                        </Form.Item>
                    </Form>
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;