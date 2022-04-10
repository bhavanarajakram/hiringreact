import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {FaSearch} from "react-icons/fa";
import { CgAddR} from "react-icons/cg";
import { MdEdit,MdDelete ,MdOutlineArrowBackIosNew,MdArrowForwardIos} from "react-icons/md";
import {Navbar,Nav,Link,Container,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
const Userdetail = () => {
  return (
    <div>
           <Navbar bg="white" expand="lg" style={{background:"white"}}>
  <Container fluid style={{background:"white"}}>
    <Navbar.Brand href="#"><h3><b>Customers<MdArrowForwardIos/> Edit Profile for Victor Bent</b></h3></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      </Nav>
      <Form className="d-flex">  
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
    <div className='row'>
        <div className='col-md-3'>
        <div class="form-group has-search">
          <span class="fa fa-search form-control-feedback" ></span>
          <input type="text" class="form-control" placeholder="Search" style={{margin:"2%"}}/>
          <div className='containerrow' >
          <div className='row' style={{margin:"1%"}}>
          <div className='col-md-3'><img src='./images/unsplash_mEZ3PoFGs_k.png' alt='img' srcSet=''  height="50px" width="50px" style={{
        margin: "auto",}}/></div>
  <div className='col-md-8'>
  <h6>Merrisa Lewis</h6>
  +1234567124
  </div> 
    </div>
    <div className='row' style={{margin:"1%"}}>
        <div className='col-md-3'>
        <img src='./images/unsplash_n4KewLKFOZw.png' alt='img' srcSet=''  height="50px" width="50px" style={{
          margin: "auto",}}/></div>
            <div className='col-md-8'>
            <h6>Fredy Henry</h6>
            +1234567124
        </div> 
    </div>
    <div className='row' style={{background:"black",color:"white",paddingLeft:"5%",paddingTop:"2%"}}>
    <div className='col-md-3' style={{marginleft:"5%"}} >
    
        <img src='./images/unsplash_iFgRcqHznqg.png' alt='img' srcSet=''  height="50px" width="50px" style={{
          margin: "auto",paddingTop:"2%"}}/></div>
            <div className='col-md-8'>
            <h6>Victor Bent</h6>
            +1234567124
        </div> 
    </div>
    <div className='row' style={{margin:"1%",}}>
    <div className='col-md-3' style={{marginleft:"3%"}}>
        <img src='./images/unsplash_rDEOVtE7vOs.png' alt='img' srcSet=''  height="50px" width="50px" style={{
          margintop:"1%",padding:"1%"}}/></div>
            <div className='col-md-8'>
            <h6>Cria Zeneva</h6>
            +1234567124
        </div> 
    </div>
    <div className='row' style={{margin:"1%"}}>
    <div className='col-md-3'>
        <img src='./images/unsplash_763-mBawsfg.png' alt='img' srcSet=''  height="50px" width="50px" style={{
          margin: "auto",}}/></div>
            <div className='col-md-8'>
            <h6>Moris Thomson</h6>
            +1234567124
        </div> 
    </div>
    <div className='row' style={{margin:"1%"}}>
    <div className='col-md-3'>
        <img src='./images/unsplash_n4KewLKFOZw.png' alt='img' srcSet=''  height="50px" width="50px" style={{
          margin: "auto",}}/></div>
            <div className='col-md-8'>
            <h6>Fredy Henry</h6>
            +1234567124
        </div> 
    </div>
    <div className='row' style={{margin:"1%"}}>
    <div className='col-md-3'>
        <img src='./images/unsplash_sLGYaQ_stMM.png' alt='img' srcSet=''  height="50px" width="50px" style={{
          margin: "auto",}}/></div>
            <div className='col-md-8'>
            <h6>Melin Lewis</h6>
            +1234567124
        </div> 
    </div>
    <div className='row' style={{margin:"1%"}}>
    <div className='col-md-3'>
        <img src='./images/unsplash_Id6U55AZMpg.png' alt='img' srcSet=''  height="50px" width="50px" style={{
          margin: "auto",}}/></div>
            <div className='col-md-8'>
            <h6>Liana Rivata</h6>
            +1234567124
        </div> 
    </div>
    </div>
  </div>
        </div>
        <div className='col-md-9'>
            <div className='featuredItem '>
                <div className='row'>
                    <div className='col-md-3 text-center'><h6>VIEW</h6></div>
                    <div className='col-md-3 text-center'><h6>EDIT<hr/></h6></div>
                    <div className='col-md-3 text center'><h6>ORDER HISTORY</h6></div>
                    <div className='col-md-3 text center'><h6>ANALYTICS</h6></div>
                    <div className='col-md-12'>
                    <form>
                    <div className='row'>
                  
                        <div className='col-md-4'>
                        <img src='./images/unsplash_iFgRcqHznqg (1).png' alt='img' srcSet=''  height="200px" width="200px" style={{
                         margin: "auto",}}/><br/>
                        <label for="fname">Address <CgAddR /></label><br/>
                        <textarea rows="3" cols="25" name="comment" form="usrform">
                        2571 Beeghley Street, Waco, </textarea><br/>
                        <input type="checkbox"  name="check" value="box"/>set as default<MdEdit/><MdDelete/>
                        </div>
                        <div className='col-md-4'>
                        
                        <label for="fname">First name:</label><br/>
                            <input type="text" id="fname" name="fname" placeholder="Victor"/><br/><br/>
                            <label for="lname">Mobile Number:</label><br/>
                            <input type="text" id="lname" name="lname" placeholder="Bent"/><br/><br/><br/><br/>
                            <label for="fname">Credit Card <CgAddR /></label><br/>
                        <textarea rows="3" cols="25" name="comment" form="usrform">
                        **** **** **** 1234</textarea><br/>
                        <input type="checkbox"  name="check" value="box"/>set as default <MdDelete/>
                        </div>
                        <div className='col-md-4'>
                        <label for="fname">Last Name:</label><br/>
                            <input type="text" id="fname" name="fname" placeholder="John"/><br/><br/>
                            <label for="lname">Email Address:</label><br/>
                            <input type="text" id="lname" name="lname" placeholder="bent@v.com
                                "/><br/><br/><br/><br/>
                            <label for="fname">Notes</label><br/>
                        <textarea rows="3" cols="25" name="comment" form="usrform">
                        Dosen't like it too spicy</textarea>
                        </div>
                            
                        </div>
                        </form>
                    </div>
                </div>
                            <div className='row' style={{margin:"2%"}}>
                                <div className='col-md-3'>

                                </div>
                                <div className='col-md-3'>
                                <h6><a href="/"><MdOutlineArrowBackIosNew/></a>Back to customer list</h6>
                                </div>
                                <div className='col-md-3'>
                                <Button variant="outline-success" style={{  color:"white",width:"170px",background:"black",borderRadius:"5%"}}>Create Order</Button>
                                </div>
                                <div className='col-md-3'>
                                <Button variant="outline-success" style={{  color:"white",width:"170px",background:"black"}}>Add Customer</Button>
                                </div>
                            </div>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Userdetail