import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


//let imput = prompt('なんでも書いてみて');

function App() {

  let post = "어딘가의 맛집";
  //let [a , b] = useState('임시저장');
  let [title , ctitle] = useState(['知るかんなもん','知ったこっちゃねえ','めどくせぇ']);
  let [num, cnum] = useState([0,3,5]);
  let [text , ctext] = useState(['うるせぇ','すっこんでろ！','うぜぇ']);
  let [date , cdate] = useState(['0000-00-00','0000-00-00','0000-00-00']);

  let ntitle ='';
  let ntext = '';
  let [m, set] = useState(false);
  let [key, ckey] = useState([...num]);
  let check = [...num];
  let [w, setw] = useState(false);

  const d = new Date();
  let time = `
${d.getFullYear()}-
${(d.getMonth()+1).toString().padStart(2, '0')}-
${d.getDate().toString().padStart(2, '0')}
`.replace(/\n|\r/g, '');


  //let [a1, b2] = [0, 1];
  // = let a1 = num[0];
  // + let b1 = num[1];





  return (
    <div className="App">
      <div className = "black-nav">
        <h4>블로그</h4>
      </div>

      <button onClick={() => {
        let cop = [...title];
        cop [0] = '수정완료'
        ctitle(cop);
        }}>글 수정</button>

        <button onClick={() => {
          if (!w){
          setw(true)
          key = [...key, 0]}else{
            setw(false)
          }
        }}>글 쓰기</button>

      <button onClick={() => {
        let cop = [...title.sort()];
        ctitle(cop);
        }}>가나다 순 정렬</button>
      <h2>誰かのブログ</h2>
      <Write></Write>
     <div>
      {
        title.map(function(title,i){
          return(
            <div className = 'list'>
              <h4><span onClick={()=>{set(true)
              ckey(i)
              }}>
                {title}
                </span>
                 &nbsp; <span onClick ={()=>
              {check[i] = num[i]+1
                cnum(check);
              }}>👍</span>&nbsp;{num[i]}
                
              </h4>
              <p>{date[i]}</p>
              <p>{text[i]}</p>
            </div>
          )
        })
      }


     </div>
     <Modal></Modal>
    </div>
  );


  function Modal(){
    if(m){
    return(
      <div className = "modal">
      <h4>{title[key]}</h4>
      <p>날짜</p>
      <p>text[key]</p>
    </div>)
    }
}

  function Write(){
    if(w){
    return(
      <form>
        <div><span>제목</span>  
        <input type = 'text' onChange = {(e) => {
          ntitle = e.target.value;
        }}></input>
        </div>
        <div><span>상세</span>
        <input type = 'text' onChange = {(e) => {
        ntext = e.target.value;
        }}></input>
        <button onClick = {() => {
          ctitle([...title,ntitle])
          ctext([...text,ntext])
          cdate([...date,time])
          cnum(...num,0)
          

        }} >wirte</button>
        </div>

      </form>)
    }
  }

}

export default App;
