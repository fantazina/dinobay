import styled from 'styled-components';
import { useEffect, useState } from 'react';

const MainLayout = styled.div`
  border: 1px solid red;
  width: 1200px;
  height: 900px;
  margin: auto;
  margin-top: 1%;
`;

const AddInput = styled.div`

  display: flex;
  width: 700px;
  height: 80px;
  margin: auto;
`;
const InputLayout = styled.div`
  /* border: 1px solid red; */
  display: flex;
  background-color: #f2eded;
  width: 700px;
  height: 70px;
  margin: auto;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
`;

const NameInput = styled.input`
  border: 1px solid blue;
  width: 40%;
  height: 40px;
  margin: auto;
  font-size: 20px;
  border-radius: 15px;
  background-color: #f2eded;
  outline: none;
  border: ${({hasError}) => hasError ? '2px solid red' : 'none'};
`;

const PriceInput = styled.input`
  /* border: 1px solid blue; */
  width: 20%;
  height: 40px;
  margin: auto;
  font-size: 20px;
  border-radius: 15px;
  background-color: #f2eded;
  outline: none;
  border: ${({hasError}) => hasError ? '2px solid red' : 'none'};
`;

const QuantityInput = styled.input`
  border: 1px solid blue;
  width: 15%;
  height: 40px;
  margin: auto;
  font-size: 20px;
  border-radius: 15px;
  background-color: #f2eded;
  outline: none;
  border: ${({hasError}) => hasError ? '2px solid red' : 'none'};
`;

const Bar = styled.div`
  margin-top: 3.5%;
  color: #d3c5c5;
`;

const Add = styled.button`
  display: flex;
  width: 80px;
  height: 70px;
  margin: auto;
  cursor: pointer;
  background-color: #d3c5c5;
  font-size: 25px;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  outline: none;
  border: none;
`;

const ErrorMsg = styled.div`
  color: red;
  font-size: 15px;
  margin: auto;
`;

const ListLayout = styled.div`
  border: 1px solid black;
  width: 600px;
  height: 32px;
  margin: auto;
`;

const ItemList = styled.div`
  display: flex;
  /* border: 1px solid red; */
`;

const No = styled.div`
  display: flex;
  justify-content: center;
  width: 10%;
  margin-top: 3px;
`;

const ItemName = styled.div`
  display: flex;
  justify-content: center;
  width: 45%;
  margin-top: 3px;
`;

const ItemPrice = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  margin-top: 3px;
`;

const CountNumber = styled.div`
  display: flex;
  justify-content: center;
  width: 15%;
  margin-top: 3px;
`;

const ListBar = styled.div`
  color: #d3c5c5;
  margin-top: 3px;
`;


function App() {

  const [productName, setProductName] = useState('')
  const [price, setPrice] = useState('')
  const [itemCount, setItemCount] = useState('')

  const [productNameError, setProductNameError] = useState('')
  const [priceError, setPriceError] = useState('')
  const [itemCountError, setItemCountError] = useState('')

  const handleAdd = () => {
    setProductNameError('')
    setPriceError('')
    setItemCountError('')

    let valid = true;
  
    if (!productName) {
      setProductNameError('품명확인')
      valid = false;
    }
  
    if (!price || isNaN(price) || price <= 0) {
      setPriceError('판매가격확인')
      valid = false;
    }
  
    if (!itemCount || isNaN(itemCount) || itemCount <= 0) {
      setItemCountError('수량확인')
      valid = false;
    }

    if (!valid) {
      return;
    }

    const item = {
      name: productName, 
      price: price, 
      itemCount: itemCount
    }

    console.log('유효성검사완:', item)
    // setError('');

    setProductName('')
    setPrice('')
    setItemCount('')
  }


  const priceChange = (e) => {
    const value = e.target.value;

    if(value === '' ||/^\d+$/.test(value)) {
      setPrice(value)
    }
  }

  const itemCountChange = (e) => {
    const value = e.target.value;

    if(value === '' || /^\d+$/.test(value)) {
      setItemCount(value)
    }
  }

  return (
    <MainLayout>
      <p>페이지 전체 레이아웃</p>
      <AddInput>
        <InputLayout>
          <NameInput placeholder='품명' type='text' value={productName} onChange={(e)=>setProductName(e.target.value)} hasError={!!productNameError}/>
          {/* {productNameError && <ErrorMsg>{productNameError}</ErrorMsg>} */}

          <Bar>|</Bar>        

          <PriceInput placeholder='판매가격' type='text' value={price} onChange={priceChange} hasError={!!priceError}/>
          {/* {priceError && <ErrorMsg>{priceError}</ErrorMsg>} */}

          <Bar>|</Bar>

          <QuantityInput placeholder='수량' type='text' value={itemCount} onChange={itemCountChange} hasError={!!itemCountError}/>
          {/* {itemCountError && <ErrorMsg>{itemCountError}</ErrorMsg>} */}

        </InputLayout>

        <Add onClick={ handleAdd }><p>+</p></Add>

      </AddInput>
      

      <h1>재고 리스트</h1>
      <ListLayout>
        <ItemList>
          <No>no.</No>
          <ListBar>|</ListBar> 
          <ItemName>품명</ItemName>
          <ListBar>|</ListBar> 
          <ItemPrice>판매가격</ItemPrice>
          <ListBar>|</ListBar> 
          <CountNumber>재고수량</CountNumber>
        </ItemList>
      </ListLayout>
    </MainLayout>
  )
};

export default App;