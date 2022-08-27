<template>
    <div style=" width: 100%; height: 100%;">
      <div style=" width: 100%; height: 20%;  display: flex; ">
        <div style=" width: 20%;  ">
          <div style="height: 50px; padding: 8px;" >
            <img src="" alt="">
            <router-link to="/">Home</router-link>
          </div>
          <div style=" box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px ; padding: 10px; border-radius: 5px; font-weight: bold;">
             All Category 
          </div>
        </div>

        <div style=" width: 80%; position: relative;">
          <!-- <div style=" width: 100%;"> -->
            <div style=" width: 100%; height: 50px; display: flex; box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px ; padding-bottom: 8px; padding-top: 8px; position: relative; z-index: 3;">
              <div style=" width: 80%;">
                <form>
                  <input type="text" name="search" placeholder="Search..">
                </form>
              </div>
              <div>
                <img src="" alt="">
              </div>
              <div>
                <img src="" alt="">
              </div>
            </div>
          <div style=" display: flex; justify-content: space-evenly; background-color: lightgray; padding: 10px; z-index: -1; font-weight: bold; ">
            <div>
                <router-link to="/bike">Bike</router-link>
            </div>
            <div>
                <router-link to="/spare">Spare-Parts</router-link>
            </div>
            <div>
                <router-link to="/accessories">Accessories</router-link>
            </div>
            <div>
                <router-link to="/contact">Contact Us</router-link>
            </div>
            <div>
                <router-link to="/about">About</router-link>
            </div>
          </div>
        </div>

      </div>

    <div style=" width: 100%; height: 80%;">
        <router-view></router-view>
    </div>
      
    </div>

</template>

<style>
input[type=text] {
  width: 100%;
  border-radius: 10px;
  background-color: white;
  background-image: url('');
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 10px;
 
}
  div{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
</style>