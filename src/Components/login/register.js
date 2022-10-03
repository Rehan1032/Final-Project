import React,{Component} from 'react';
import Header from '../../Header'
const url = "https://djwt.herokuapp.com/api/auth/register";

class Register extends Component{

    constructor(props){
        super(props)

        this.state={
            name:'',
            email:'',
            password:'',
            phone:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
       
    }

    handleSubmit = () => {
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/'))
    }

    render(){
        return(
          <>
          <Header />
          <div className='mycontainer'>
              <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample "/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
       
          
          </div>

          

          <div class="form-outline mb-4">
            <input type="name" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter Name" name="name"
            value={this.state.name}
              onChange={this.handleChange}/>
            <label class="form-label" for="form3Example3">Name</label>
          </div>
          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" name="email"
            
              value={this.state.email}
              onChange={this.handleChange}/>
            <label class="form-label" for="form3Example3">Email address</label>
          </div>

          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter Password" name="password"  value={this.state.password}
              onChange={this.handleChange}  />
            <label class="form-label" for="form3Example4">Password</label>
          </div>
          <div class="form-outline mb-3">
            <input type="phone" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter Number" name="phone"  value={this.state.phone}
              onChange={this.handleChange}  />
            <label class="form-label" for="form3Example4">Phone</label>
          </div>

          <div class="d-flex justify-content-between align-items-center">
         
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body">Forgot password?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-primary btn-lg"  onClick={this.handleSubmit} 
              style={{paddingLeft: '2.5rem; padding-right: 2.5rem'}}>Register</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                class="link-danger">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  </section>
  
  </div>
  
        </>
                
             
        )
    }
}

export default Register