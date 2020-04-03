import React from 'react';

export default function Header({children}){
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}

//Forma 1: Exportar o componente
// export default Header;

/*
//1 - Obtém caso exista a propriedade 'title'
<header>
            <h1>{props.title}</h1>
        </header>

//2 - Obtém caso o componente tenha filhos <Header> Filhos .... </Header>
<header>
    <h1>{props.children}</h1>
</header>

//3 - Obtendo a propriedade pela destruturação
export default function Header({ children }){
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}

*/