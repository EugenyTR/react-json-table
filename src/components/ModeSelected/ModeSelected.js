import Reacr from 'react';

export default props => {

    const bigUrl = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;

    const smallUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;

    return (
        <div style={{display: 'flex', justifyContent: 'center', padding: '5% 0'}}>
            <button style={{margin: '10px'}} onClick={() => props.onSelect(smallUrl)} className="btn btn-success">32 элемента</button>
            <button style={{margin: '10px'}} onClick={() => props.onSelect(bigUrl)} className="btn btn-primary">1000 элементов</button>
        </div>
    );
}