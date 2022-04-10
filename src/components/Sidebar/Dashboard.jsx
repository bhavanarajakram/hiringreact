import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaSearch,} from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgAddR} from "react-icons/cg";
import {Navbar,Nav,Link,Container,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
const Dashboard = () => {
  return (
    <div >
    <Navbar bg="white" expand="lg" style={{background:"white"}}>
     <Container fluid style={{background:"white"}}>
      <Navbar.Brand href="#"><h3><b>Customers</b></h3></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        </Nav>
        <Form className="d-flex">
        <input type="text" class="form-control" placeholder="Try Merrisa Lewis" style={{margin:"2%"}}/>
        
          <Button variant="outline-success" style={{  color:"white",width:"250px",background:"black"}}><CgAddR style={{color:"black",background:"white",borderBlockColor:'black',margin:"3%"}}/>Add Customer</Button>
        </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
<hr/>
    <div className='row'>
      <div className='col-md-3'>
      <div className="featuredItem" style={{height:"130px",color:"white",background:"black"}}>
        <span className="featuredTitle">TOTAl REVENUE</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$ 1,200.00</span>
          <span className="featuredMoneyRate">
          </span>
        </div>
      </div>
      </div>
      <div className='col-md-3'>
      <div className="featuredItem">
        <span className="featuredTitle">Number 1</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"># 100</span>
          <span className="featuredMoneyRate">
          </span>
        </div>
        <hr/>
        <span className="featuredSub">EST.REVENUE</span>
        <span className="featuredSub" style={{margin:"20%"}}>$1,200.00</span>
      </div>
      </div>
      <div className='col-md-3'>
      <div className="featuredItem">
        <span className="featuredTitle">Number 2</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"># 120</span>
          <span className="featuredMoneyRate">
          </span>
        </div>
        <hr/>
        <span className="featuredSub">EST.REVENUE</span>
        <span className="featuredSub" style={{margin:"20%"}}>$1,200.00</span>
      </div>
      </div>
      <div className='col-md-3'>
      <div className="featuredItem">
        <span className="featuredTitle">Number 3</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"># 10</span>
          <span className="featuredMoneyRate">
          </span>
        </div>
        <hr/>
        <span className="featuredSub">EST.REVENUE</span>
        <span className="featuredSub" style={{margin:"20%"}}>$1,200.00</span>
      </div>
      </div>
      
    </div>
    <div className='row' style={{margin:"2%",overflow:"hidden"}}>
      <div className='col-md-1'>
      <h6>PROFILE</h6>
      </div>
      <div className='col-md-1'>
        <h6>FIRST NAME</h6>
      </div>
      <div className='col-md-1'>
        <h6>LAST NAME</h6>
      </div>
      <div className='col-md-1'>
        <h6>MOBILE</h6>
      </div>
      <div className='col-md-2'>
        <h6>EMAIL ADDRESS</h6>
      </div>
      <div className='col-md-2'>
        <h6>CREDIT CARD</h6>
      </div>
      <div className='col-md-2'>
        <h6>TOTAL SALES</h6>
      </div>
      <div className='col-md-2'>
      <h6>LAST ORDER</h6>
      </div>
  
      <hr />
    </div>
    <div className='row' style={{margin:"1%"}}>
      <div className='col-md-1'>
      <img src='./images/unsplash_mEZ3PoFGs_k.png' alt='img' srcSet=''  height="50px" width="50px" style={{
  margin: "auto",}}/>
      </div>
      <div className='col-md-1'>
        <h6>Merrisa</h6>
      </div>
      <div className='col-md-1'>
        <h6>Lewis</h6>
      </div>
      <div className='col-md-1'>
        <h6>+1234567124</h6>
      </div>
      <div className='col-md-2'>
        <h6>m@lewi.com</h6>
      </div>
      <div className='col-md-2'>
        <h6>**** ****7891</h6>
      </div>
      <div className='col-md-2'>
        <h6>$130.00</h6>
      </div>
      <div className='col-md-2'>
      <h6>12/02/2022      <BsThreeDotsVertical/></h6>
      </div>
    </div>
    <div className='row' style={{margin:"1%"}}>
      <div className='col-md-1'>
      <img src='./images/unsplash_n4KewLKFOZw.png' alt='img' srcSet=''  height="50px" width="50px" style={{
  margin: "auto",}}/>
      </div>
      <div className='col-md-1'>
        <h6>Fredy</h6>
      </div>
      <div className='col-md-1'>
        <h6>Henry</h6>
      </div>
      <div className='col-md-1'>
        <h6>+1234567124</h6>
      </div>
      <div className='col-md-2'>
        <h6>m@lewi.com</h6>
      </div>
      <div className='col-md-2'>
        <h6>**** ****7891</h6>
      </div>
      <div className='col-md-2'>
        <h6>$100.20</h6>
      </div>
      <div className='col-md-2'>
      <h6>11/02/2022       <BsThreeDotsVertical/></h6>
      </div>
    </div>
    <div className='row' style={{margin:"1%"}}>
      <div className='col-md-1'>
      <img src='./images/unsplash_iFgRcqHznqg.png' alt='img' srcSet=''  height="50px" width="50px" style={{
  margin: "auto",}}/>
      </div>
      <div className='col-md-1'>
        <h6>Victor</h6>
      </div>
      <div className='col-md-1'>
        <h6>Bent</h6>
      </div>
      <div className='col-md-1'>
        <h6>+1234567124</h6>
      </div>
      <div className='col-md-2'>
        <h6>m@lewi.com</h6>
      </div>
      <div className='col-md-2'>
        <h6>**** ****7891</h6>
      </div>
      <div className='col-md-2'>
        <h6>$230.50</h6>
      </div>
      <div className='col-md-2'>
      <h6>02/02/2022        <a href='/userdetail'><BsThreeDotsVertical/></a></h6>
      </div>
    </div>
    <div className='row' style={{margin:"1%"}}>
      <div className='col-md-1'>
      <img src='./images/unsplash_rDEOVtE7vOs.png' alt='img' srcSet=''  height="50px" width="50px" style={{
  margin: "auto",}}/>
      </div>
      <div className='col-md-1'>
        <h6>Cria</h6>
      </div>
      <div className='col-md-1'>
        <h6>Zeneva</h6>
      </div>
      <div className='col-md-1'>
        <h6>+1234567124</h6>
      </div>
      <div className='col-md-2'>
        <h6>m@lewi.com</h6>
      </div>
      <div className='col-md-2'>
        <h6>**** ****7891</h6>
      </div>
      <div className='col-md-2'>
        <h6>$150.00</h6>
      </div>
      <div className='col-md-2'>
      <h6>12/03/2022      <BsThreeDotsVertical/></h6>
      </div>
    </div>
    <div className='row' style={{margin:"1%"}}>
      <div className='col-md-1'>
      <img src='./images/unsplash_763-mBawsfg.png' alt='img' srcSet=''  height="50px" width="50px" style={{
  margin: "auto",}}/>
      </div>
      <div className='col-md-1'>
        <h6>Moris</h6>
      </div>
      <div className='col-md-1'>
        <h6>Thomson</h6>
      </div>
      <div className='col-md-1'>
        <h6>+1234567124</h6>
      </div>
      <div className='col-md-2'>
        <h6>m@lewi.com</h6>
      </div>
      <div className='col-md-2'>
        <h6>**** ****7891</h6>
      </div>
      <div className='col-md-2'>
        <h6>$175.00</h6>
      </div>
      <div className='col-md-2'>
      <h6>12/03/2022      <BsThreeDotsVertical/></h6>
      </div>
    </div>
    <div className='row' style={{margin:"1%"}}>
      <div className='col-md-1'>
      <img src='./images/unsplash_Id6U55AZMpg.png' alt='img' srcSet=''  height="50px" width="50px" style={{
  margin: "auto",}}/>
      </div>
      <div className='col-md-1'>
        <h6>Liana</h6>
      </div>
      <div className='col-md-1'>
        <h6>Rivata</h6>
      </div>
      <div className='col-md-1'>
        <h6>+1234567124</h6>
      </div>
      <div className='col-md-2'>
        <h6>m@lewi.com</h6>
      </div>
      <div className='col-md-2'>
        <h6>**** ****7891</h6>
      </div>
      <div className='col-md-2'>
        <h6>$180.00</h6>
      </div>
      <div className='col-md-2'>
      <h6>12/02/2022<BsThreeDotsVertical/></h6>
      </div>
    </div>
</div>





  )
}

export default Dashboard;