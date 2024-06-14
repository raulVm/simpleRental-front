<template>
    <div class="container-bar relative">
        <input type="checkbox" id="btn-social">
        <label for="btn-social">
            <img
                alt="..."
                :src="Bars"
                class="shadow-lg mx-10 max-w-10-px"
                style="width: 50%; background: darkturquoise"
                />
        </label>
          <div class="icon-social">
            <a href="https://www.facebook.com/profile.php?id=61551789275168" target="_blank">
                <img
                alt="..."
                :src="Facebook"
                class="shadow-lg rounded-full mx-auto max-w-20-px"
                />
              <span id="title">Facebook</span>
            </a>
            <a href="https://www.youtube.com/@simplerentalmx" target="_blank">
                <img
                alt="..."
                :src="Youtube"
                class="shadow-lg rounded-full mx-auto max-w-20-px"
                />
              <span id="title">Youtube</span>
            </a>
            <a href="https://wa.me/529841837620" target="_blank">
                <img
                alt="..."
                :src="Whatsapp"
                class="shadow-lg rounded-full mx-auto max-w-20-px"
                />
              <span id="title">Whatsapp</span>
            </a>
            <a href="https://www.instagram.com/simplerental.mx/" target="_blank">
                <img
                alt="..."
                :src="Instagram"
                class="shadow-lg rounded-full mx-auto max-w-20-px"
                />
              <span id="title">Instagram</span>
            </a>
          </div>
    </div>
</template>
<script>
import Facebook from "@/assets/imagenes/Facebook.png";
import Youtube from "@/assets/imagenes/Youtube.png";
import Whatsapp from "@/assets/imagenes/Whatsapp.png";
import Instagram from "@/assets/imagenes/Instagram.png";
import Bars from "@/assets/imagenes/bars.png";

export default {
    data(){
        return {
            Facebook: Facebook,
            Youtube: Youtube,
            Whatsapp: Whatsapp,
            Instagram: Instagram,
            Bars: Bars
        }
    }
}
</script>
<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  .container-bar{
    width: 100%;
    max-width: 50px;
    position: fixed;
    left: 0;
    top: 25%;
  }
  .container-bar a{
    display: block;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    position: relative;
    transition: all 500ms ease;
    color: #fff;
  }
  .container-bar a:hover{
    background: #1c1c1c;
  }
  .container-bar .fa-facebook{
    background: #00acee;
    border-radius: 0px 5px 0px 0px;
  }
  .container-bar .fa-youtube{
    background: #e52a23;
  }
  .container-bar .fa-twitter{
    background: #00acee;
  }
  .container-bar .fa-github{
    background: #747473;
  }
  .container-bar .fa-pinterest{
    background: #c8232c;
    border-radius: 0px 0px 5px 0px;
  }
  .container-bar #title{
    position: absolute;
    background: #1c1c1c;
    padding: 0px 8px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 3px;
    font-size: 15px;
    top:12px; left: 0px;
    transition: all 500ms ease;
    opacity: 0;
    visibility: hidden;
    z-index: -1;
  }
  .container-bar a:hover #title{
    opacity: 1;
    visibility: visible;
    left: 64px;
  }
  .container-bar #title:after{
    position: absolute;
    content: '';
    border-left: 7px solid transparent;
    border-right: 6px solid #1c1c1c;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    right: 100%;
    top: 8px;
  }
  #btn-social{
    display: none;
  }
  .fa-play{
    cursor: pointer;
    transition: all 0.4s;
    font-size: 12px;
    margin-bottom: 5px;
    display: inline-block;
    transform: rotate(180deg);
    color: #49b0e6;
  }
  #btn-social:checked ~ .fa-play{
    transform: rotate(0deg);
  }
  .icon-social{
    transition: all 0.4s;
    transform: translateX(0%);
    box-shadow: 0px 1px 10px rgba(0,0,0,0.3);
  }
  #btn-social:checked ~ .icon-social{
    transform: translateX(-100%);
    box-shadow: 0px 1px 10px rgba(0,0,0,0.0);
  }
</style>
