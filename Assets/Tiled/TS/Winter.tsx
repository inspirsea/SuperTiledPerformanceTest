<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.9" tiledversion="1.9.2" name="Winter" tilewidth="32" tileheight="32" tilecount="184" columns="8">
 <image source="../Tiles/Winter.png" width="256" height="736"/>
 <tile id="2" probability="50"/>
 <tile id="3">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="0" y="0" width="32" height="32">
    <properties>
     <property name="unity:IsTrigger" type="bool" value="true"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
 <tile id="4">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Water" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="5">
  <objectgroup draworder="index" id="2">
   <object id="2" class="Ice" x="18" y="0" width="14" height="32"/>
  </objectgroup>
 </tile>
 <tile id="6">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="15" y="32">
    <polygon points="0,0 0,-9.47368 8.05263,-18 17,-18 17,0"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="7">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="-1" y="16" width="34" height="17"/>
  </objectgroup>
 </tile>
 <tile id="8">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="-0.705882" y="15">
    <polygon points="0.705882,0 9.17647,0 16.7059,8.5 16.7059,17 0.705882,17"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="9">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="0" y="0" width="15" height="32"/>
  </objectgroup>
 </tile>
 <tile id="10">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="15.7778" y="-0.3">
    <polygon points="0.222222,0.3 0.222222,9.9 8.22222,16.3 16.2222,16.3 16.2222,0.3"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="11">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="0" y="0" width="32" height="15.875"/>
  </objectgroup>
 </tile>
 <tile id="12">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="0.335526" y="16">
    <polygon points="-0.335526,0 8.61184,0 16.6645,-7.11111 16.6645,-16 -0.335526,-16"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="13">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="15.3472" y="32.2162">
    <polygon points="-0.236111,-0.216216 -0.236111,-10.5946 8.26389,-18.3784 18.6528,-18.3784 18.6528,-32.2162 -15.3472,-32.2162 -15.3472,-0.216216"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="14">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="-0.457143" y="14.2222">
    <polygon points="0.457143,0 9.6,0 17.8286,8 17.8286,17.7778 32.4571,17.7778 32.4571,-14.2222 0.457143,-14.2222"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="15">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="14.7778" y="-0.540541">
    <polygon points="0.333333,0.540541 0.333333,9.18919 8.33333,17.8378 17.2222,17.8378 17.2222,32.5405 -14.7778,32.5405 -14.7778,0.540541"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="16">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="18.125" y="-2.5">
    <polygon points="0,0 0.125,14.5 -8.5,21.375 -19.75,21.125 -19.875,36.375 15.625,36.375 15.5,0.375"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="17">
  <objectgroup draworder="index" id="2">
   <object id="1" type="Water" x="17.75" y="33.375">
    <polygon points="0,0 0.125,-10.25 9.125,-18.875 16.5,-19 16.5,0.125"/>
   </object>
   <object id="2" type="Ice" x="15.375" y="33.5">
    <polygon points="0,0 -0.25,-12 10.25,-21.5 18.75,-21.125 18.375,-35.875 -17.5,-35.75 -17.5,0.125"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="18">
  <objectgroup draworder="index" id="2">
   <object id="1" type="Water" x="-1.125" y="33.625">
    <polygon points="0,0 34.375,-0.125 34.625,-17.875 -0.375,-17.375"/>
   </object>
   <object id="2" type="Ice" x="-1.125" y="-2.125">
    <polygon points="0,0 0,16.25 34,16.25 34.25,0.125"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="19">
  <objectgroup draworder="index" id="2">
   <object id="1" type="Water" x="-2.375" y="15.125">
    <polygon points="0,0 8.75,0.125 16.5,9.875 16.5,18 0,17.5"/>
   </object>
   <object id="2" type="Ice" x="15.625" y="33.375">
    <polygon points="0,0 17.875,0 17.5,-35.375 -17,-34.875 -16.625,-19.625 -8.25,-19.5 -0.375,-8.375"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="20">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Water" x="17.25" y="-2.375">
    <polygon points="0,0 0.5,36.125 16.875,36 16.125,-0.5"/>
   </object>
   <object id="2" class="Ice" x="-1.375" y="-2.125">
    <polygon points="0,0 0,35.875 17.625,35.5 17,-0.625"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="21">
  <objectgroup draworder="index" id="2">
   <object id="1" type="Water" x="-1.5" y="-1.625">
    <polygon points="0,0 0,34.625 15.375,34.75 15.75,-0.125"/>
   </object>
   <object id="2" type="Ice" x="33.125" y="-1.5">
    <polygon points="0,0 0.375,34.125 -17.75,34.25 -17.875,-0.375"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="22">
  <objectgroup draworder="index" id="2">
   <object id="1" type="Water" x="14.5" y="-2.125">
    <polygon points="0,0 0,8.625 8.625,17.125 19.25,17.125 18.875,0"/>
   </object>
   <object id="2" type="Ice" x="-1.5" y="-3">
    <polygon points="0,0 0,36.125 35,36 35.25,19.125 23.625,19.5 14.625,10.125 14.75,0.75"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="23">
  <objectgroup draworder="index" id="2">
   <object id="1" type="Water" x="-1.5" y="-1.75">
    <polygon points="0,0 0.125,16.75 35.375,17 35.125,0"/>
   </object>
   <object id="2" type="Ice" x="-1.125" y="16.375">
    <polygon points="0,0 -0.125,16.625 34.625,16.625 34.75,-0.125"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="24">
  <objectgroup draworder="index" id="2">
   <object id="1" type="Water" x="0" y="16">
    <polygon points="0,0 9,0 16.5,-8.75 16.375,-18.75 -1.375,-18.75"/>
   </object>
   <object id="2" type="Ice" x="-1.75" y="17.625">
    <polygon points="0,0 11.375,0 20,-10.375 19.5,-20.375 35.625,-20.375 35.125,15.75 -1.5,15.5"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="25">
  <objectgroup draworder="index" id="2">
   <object id="1" type="Water" x="14.125" y="33.5">
    <polygon points="0,0 0.125,-11.625 9.875,-19.75 19.5,-19.625 19.25,-35.625 -15,-34.75 -15.125,-1"/>
   </object>
   <object id="2" type="Ice" x="33.625" y="14.875">
    <polygon points="0,0 -9.25,-0.125 -18.625,7.75 -18.375,17.75 -0.25,17.75"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="26">
  <objectgroup draworder="index" id="2">
   <object id="1" type="Ice" x="-1.375" y="13.875">
    <polygon points="0,0 10.125,0.125 18.5,9 18.875,19.625 -0.75,19"/>
   </object>
   <object id="2" type="Water" x="-1.5" y="-1.5">
    <polygon points="0,0 0,13.625 10.75,13.625 19.75,22.875 20.125,34.5 35.125,34.625 34.125,-0.5"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="27">
  <objectgroup draworder="index" id="2">
   <object id="1" type="Water" x="13.625" y="-1.875">
    <polygon points="0,0 0,10.125 10.25,18.625 20.125,18.875 19.375,36.875 -16,36.375 -15.75,0.25"/>
   </object>
   <object id="2" type="Ice" x="15.125" y="-2.125">
    <polygon points="0,0 -0.125,9.125 9.25,17.75 18.5,17.625 18.375,-0.375"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="28">
  <objectgroup draworder="index" id="2">
   <object id="2" type="Water" x="-1.625" y="15.875">
    <polygon points="0,0 11,0 20.875,-7.125 21.125,-18.5 34.75,-18.625 35,19.125 0.25,18.375"/>
   </object>
   <object id="3" type="Ice" x="-1.5" y="-3.25">
    <polygon points="0,0 0,17 10.625,16.75 19.625,10.25 19.625,0.125"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="29">
  <objectgroup draworder="index" id="2">
   <object id="1" x="13.4545" y="34.3636">
    <polygon points="0,0 0,-12.3636 3.63636,-20.7273 18.5455,-24.1818 21.0909,-23.8182 21.6364,-1.27273"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="30">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="10.8897">
    <polygon points="0,0.110331 3,0.110331 18,12.1103 18,21.1103 0,21.1103"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="31">
  <objectgroup draworder="index" id="2">
   <object id="1" x="13.0909" y="-2.72727">
    <polygon points="0,0 1.27273,16.9091 6.90909,18.7273 7.81818,22.5455 11.4545,24.3636 21.0909,26 20.9091,0.363636"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="32">
  <objectgroup draworder="index" id="2">
   <object id="1" x="-2.36364" y="23.4545">
    <polygon points="0,0 4.18182,-0.363636 12.5455,-5.09091 19.0909,-16.5455 19.0909,-26 0.181818,-25.0909"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="33">
  <objectgroup draworder="index" id="2">
   <object id="1" x="-2" y="23.2727">
    <polygon points="0,0 6,2.90909 16.7273,1.09091 19.2727,3.63636 23.8182,3.27273 27.4545,0 35.4545,-0.363636 35.6364,-26.7273 0.181818,-25.8182"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="34">
  <objectgroup draworder="index" id="2">
   <object id="1" x="-2.18182" y="11.0909">
    <polygon points="0,0 36.7273,-0.545455 36.7273,22.3636 -0.363636,22.9091"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="35">
  <objectgroup draworder="index" id="2">
   <object id="1" x="13.0909" y="-2.36364">
    <polygon points="0,0 -0.181818,36.3636 21.4545,35.8182 20.5455,0.181818"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="36">
  <objectgroup draworder="index" id="2">
   <object id="1" x="16.1818" y="-2.36364">
    <polygon points="0,0 1.63636,12.3636 1.63636,29.6364 -0.545455,36 -18,36 -17.8182,-0.363636"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="37">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="38">
  <objectgroup draworder="index" id="2">
   <object id="1" x="15.6364" y="35.0909">
    <polygon points="0,0 0.727273,-4.72727 6,-10.1818 18.3636,-10.5455 18.7273,-37.8182 -18,-37.2727 -18.1818,-1.45455"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="39">
  <objectgroup draworder="index" id="2">
   <object id="1" x="-2.36364" y="24">
    <polygon points="0,0 7.27273,-0.545455 11.2727,0.727273 14.9091,7.45455 14.9091,9.81818 36,9.63636 35.6364,-25.8182 0.727273,-25.6364"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="40">
  <objectgroup draworder="index" id="2">
   <object id="1" x="15.0909" y="-2.36364">
    <polygon points="0,0 2.36364,5.81818 8.72727,8 10.9091,12.7273 18.5455,13.2727 18.3636,36 -16.7273,35.6364 -16.3636,0"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="41">
  <objectgroup draworder="index" id="2">
   <object id="1" x="-1.81818" y="10.9091">
    <polygon points="0,0 3.09091,-0.181818 9.63636,-2.90909 15.8182,-10.3636 15.8182,-13.0909 35.4545,-13.0909 35.4545,22.9091 -0.363636,23.0909"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="54" probability="50"/>
 <tile id="55" probability="0.05"/>
 <tile id="56" probability="0.05"/>
 <tile id="57" probability="0.05"/>
 <tile id="58" probability="0.05"/>
 <tile id="59" probability="0.05"/>
 <tile id="60" probability="0.05"/>
 <tile id="61" probability="0.05"/>
 <tile id="62" probability="0.05"/>
 <tile id="63" probability="0.05"/>
 <tile id="64" probability="0"/>
 <tile id="77" probability="5"/>
 <tile id="78" probability="0"/>
 <tile id="79" probability="0"/>
 <tile id="80" probability="0"/>
 <tile id="81" probability="0"/>
 <tile id="82" probability="0"/>
 <tile id="83" probability="0"/>
 <tile id="84" probability="0"/>
 <tile id="85" probability="0"/>
 <tile id="86" probability="0"/>
 <tile id="87" probability="0"/>
 <tile id="88" probability="0"/>
 <tile id="89" probability="0"/>
 <tile id="90" probability="0.005"/>
 <tile id="91" probability="0.005"/>
 <tile id="92" probability="0.005"/>
 <tile id="93" probability="0.005">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Water" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="94" probability="0.005">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Water" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="95" probability="0.005">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Water" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="96" probability="0.005">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="97" probability="0.005">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="98" probability="0.005">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="99" probability="0">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0.363636" y="32.5455">
    <polygon points="0,0 0.363636,-1.81818 17.5455,-29.1818 23.3636,-17.8182 31.1818,-31.6364 32.0909,-31.7273 32.0909,-0.181818"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="100" probability="0">
  <objectgroup draworder="index" id="2">
   <object id="1" x="-0.545455" y="0.454545">
    <polygon points="0,0 1.27273,0.0909091 10.9091,16.2727 19.2727,5.72727 23.1818,16.8182 32.0909,0.0909091 32.9091,0.181818 33,32.1818 -0.0909091,32.0909"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="101" probability="0">
  <objectgroup draworder="index" id="2">
   <object id="1" x="-0.727273" y="0.545455">
    <polygon points="0,0 1.72727,0.181818 10.7273,18.0909 19.6364,8.09091 32,31.1818 31.7273,32.3636 0.363636,32"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="102" probability="0">
  <objectgroup draworder="index" id="2">
   <object id="1" x="2.90909" y="32.7273">
    <polygon points="0,0 0.272727,-2.45455 8.63636,-15.6364 2.18182,-20.8182 -1.36364,-27.8182 -1.18182,-33.8182 29.5455,-33.6364 29.5455,-0.272727"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="103" probability="0">
  <objectgroup draworder="index" id="2">
   <object id="1" x="-0.727273" y="29.1818">
    <polygon points="0,0 4.90909,-0.0909091 11.2727,-4.63636 11.4545,-10.5455 23.0909,-10 24.4545,-2.09091 30,0.636364 33.1818,0.545455 33.2727,-29.9091 0.181818,-29.7273"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="104" probability="0">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0.727273" y="-0.818182">
    <polygon points="0,0 3,13 8.90909,19.2727 19.2727,20.4545 21.1818,25.6364 27.2727,30.0909 31.8182,29.9091 31.6364,0.272727"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="105" probability="0">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="106" probability="0">
  <objectgroup draworder="index" id="2">
   <object id="1" x="-0.636364" y="29.6364">
    <polygon points="0,0 3.72727,-0.0909091 9.81818,-4.45455 9.90909,-12.4545 21.4545,-12.7273 29.8182,-19.4545 31.9091,-27.5455 31.4545,-30.3636 0.272727,-30.3636"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="107" probability="0">
  <objectgroup draworder="index" id="2">
   <object id="1" x="-0.454545" y="32.8182">
    <polygon points="0,0 30.2727,-0.181818 30.2727,-3.63636 22.9091,-13.3636 31.6364,-26.0909 31.6364,-34 -0.181818,-33.6364"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="108" probability="0">
  <objectgroup draworder="index" id="2">
   <object id="1" x="1.45455" y="31.7273">
    <polygon points="0,0 16,-23.6364 29.8182,-0.0909091 29.6364,1.36364 0.0909091,1"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="109" probability="0">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0.545455" y="-2">
    <polygon points="0,0 0.363636,6.90909 3.45455,14.9091 12.1818,19.6364 19.4545,19.2727 26.9091,13.6364 30.1818,3.45455 30,0.909091"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="110" probability="0">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0.181818" y="32.9091">
    <polygon points="0,0 0.545455,-2.72727 8.72727,-15.0909 2.54545,-20 0,-26.3636 0.727273,-33.8182 30.3636,-33.8182 30.7273,-26.7273 29.2727,-21.6364 21.0909,-13.2727 30.3636,-2 30.5455,0"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="111" probability="0">
  <objectgroup draworder="index" id="2">
   <object id="1" x="33.6364" y="30.5455">
    <polygon points="0,0 -10.7273,-3.45455 -14.3636,-11.6364 -1.27273,-32"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="112" probability="0">
  <objectgroup draworder="index" id="2">
   <object id="1" x="-1.27273" y="31.0909">
    <polygon points="0,0 9.81818,-3.45455 12,-9.09091 0.181818,-32.1818"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="113" probability="0">
  <objectgroup draworder="index" id="2">
   <object id="1" x="1.625" y="26.5">
    <polygon points="0,0 3.25,-18.625 9.25,-22.125 17.375,-21.625 22.75,-18.125 19.375,0 13.625,3.625 5.5,3.25"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="114" probability="0"/>
 <tile id="115" class="Road">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Road" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="116" class="Road" probability="0">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Road" x="0" y="0" width="32" height="32"/>
   <object id="2" x="-0.125" y="10.625">
    <polygon points="0,0 10.25,-10.875 31.75,10.125 21.75,21.125"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="117" class="Road" probability="0">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Road" x="0" y="0" width="32" height="32"/>
   <object id="2" x="9.5" y="1.125">
    <polygon points="0,0 -0.375,29.375 14,29.375 13.875,0.25"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="118" class="Road" probability="0">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Road" x="0" y="0" width="32" height="32"/>
   <object id="2" x="1.375" y="9.625">
    <polygon points="0,0 29.125,-0.5 29.125,13 -0.125,12.75"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="119" class="Road" probability="0.01">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Road" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="120" class="Road" probability="0.01">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Road" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="121" probability="0">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Road" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="122" probability="0">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Road" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="123" probability="0">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Road" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="124" probability="0">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Road" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="125" probability="0">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Road" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="126" probability="0">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Road" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="127" probability="0">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Road" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="128" probability="0">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Road" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="129" probability="0">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Road" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="130">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="131">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="132">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="133">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="134">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="135">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="136">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="137">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="138">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="139">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="140">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="141">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="142">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="143">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="144">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="145">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="146">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Road" x="17.6364" y="33.8182">
    <polygon points="0,0 0.727273,-10.9091 6.90909,-19.0909 16,-18.7273 16.5455,-0.363636"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="147">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Road" x="17.4545" y="-2.36364">
    <polygon points="0,0 0.545455,35.6364 15.4545,35.4545 15.2727,0"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="148">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Road" x="17.0909" y="-2.90909">
    <polygon points="0,0 0.363636,11.4545 8.36364,20.1818 17.4545,18.9091 16.7273,-0.727273"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="149">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Road" x="-2.36364" y="16">
    <polygon points="0,0 35.6364,-0.363636 35.4545,17.2727 1.27273,16.5455"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="150">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Road" x="-1.63636" y="14.7273">
    <polygon points="0,0 10.9091,0.363636 18.5455,7.27273 18.3636,18.5455 -0.181818,18"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="151">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Road" x="15.8182" y="-2.54545">
    <polygon points="0,0 0.545455,36 -17.2727,36.1818 -17.6364,0.727273"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="152">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Road" x="-2" y="13.4545">
    <polygon points="0,0 35.6364,0.181818 34.7273,-15.6364 1.09091,-15.0909"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="153">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Road" x="16.3636" y="-2.18182">
    <polygon points="0,0 1.27273,10.5455 -5.63636,18.1818 -19.8182,18 -18.7273,-0.181818"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="154">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Road" x="15.0909" y="34.1818">
    <polygon points="0,0 0.181818,-11.2727 9.27273,-19.4545 19.2727,-19.8182 18,-37.4545 -17.4545,-36 -16.7273,-1.27273"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="155">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Road" x="-2.54545" y="13.4545">
    <polygon points="0,0 11.6364,0.363636 20.1818,11.6364 20.3636,20.5455 35.6364,20.1818 35.2727,-14.5455 0.363636,-14.5455"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="156">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Road" x="16" y="-2.18182">
    <polygon points="0,0 0.909091,13.2727 7.09091,18.7273 17.4545,18.5455 17.2727,34.7273 -17.2727,34.9091 -17.0909,1.09091"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="157">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Road" x="-1.45455" y="16">
    <polygon points="0,0 11.8182,-0.181818 20.7273,-10 20.9091,-18 34.5455,-17.6364 34.3636,17.0909 0.545455,16.7273"/>
   </object>
  </objectgroup>
 </tile>
 <tile id="158">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="159">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="160">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="161">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="162">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="163">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="164">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="165">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="166">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="167">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="168">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="169">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="170">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Ice" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="171">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Water" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="172">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Water" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="173">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Water" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="174">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Water" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="175">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Water" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="176">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Water" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="177">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Water" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="178">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Water" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="179">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Water" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="180">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Water" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="181">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Water" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="182">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Water" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <tile id="183">
  <objectgroup draworder="index" id="2">
   <object id="1" class="Water" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
 <wangsets>
  <wangset name="Winter" type="corner" tile="-1">
   <wangcolor name="Snow" color="#c4e1ff" tile="-1" probability="2"/>
   <wangcolor name="Ice" color="#5defff" tile="-1" probability="2"/>
   <wangcolor name="Water" color="#1371ff" tile="-1" probability="2"/>
   <wangcolor name="Rocks" color="#625d55" tile="-1" probability="1"/>
   <wangcolor name="Dark Snow" color="#8499ba" tile="-1" probability="1"/>
   <wangcolor name="Dirt" color="#56412c" tile="-1" probability="0.01"/>
   <wangcolor name="Trees" color="#226d2e" tile="-1" probability="1"/>
   <wangcolor name="Concrete" color="#9f948d" tile="-1" probability="1"/>
   <wangcolor name="Dark Ice" color="#2e7ca5" tile="-1" probability="1"/>
   <wangcolor name="Dark Water" color="#193c7d" tile="-1" probability="1"/>
   <wangtile tileid="2" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="3" wangid="0,2,0,2,0,2,0,2"/>
   <wangtile tileid="4" wangid="0,3,0,3,0,3,0,3"/>
   <wangtile tileid="5" wangid="0,2,0,2,0,1,0,1"/>
   <wangtile tileid="6" wangid="0,1,0,2,0,1,0,1"/>
   <wangtile tileid="7" wangid="0,1,0,2,0,2,0,1"/>
   <wangtile tileid="8" wangid="0,1,0,1,0,2,0,1"/>
   <wangtile tileid="9" wangid="0,1,0,1,0,2,0,2"/>
   <wangtile tileid="10" wangid="0,2,0,1,0,1,0,1"/>
   <wangtile tileid="11" wangid="0,2,0,1,0,1,0,2"/>
   <wangtile tileid="12" wangid="0,1,0,1,0,1,0,2"/>
   <wangtile tileid="13" wangid="0,2,0,1,0,2,0,2"/>
   <wangtile tileid="14" wangid="0,2,0,2,0,1,0,2"/>
   <wangtile tileid="15" wangid="0,1,0,2,0,2,0,2"/>
   <wangtile tileid="16" wangid="0,2,0,2,0,2,0,1"/>
   <wangtile tileid="17" wangid="0,2,0,3,0,2,0,2"/>
   <wangtile tileid="18" wangid="0,2,0,3,0,3,0,2"/>
   <wangtile tileid="19" wangid="0,2,0,2,0,3,0,2"/>
   <wangtile tileid="20" wangid="0,3,0,3,0,2,0,2"/>
   <wangtile tileid="21" wangid="0,2,0,2,0,3,0,3"/>
   <wangtile tileid="22" wangid="0,3,0,2,0,2,0,2"/>
   <wangtile tileid="23" wangid="0,3,0,2,0,2,0,3"/>
   <wangtile tileid="24" wangid="0,2,0,2,0,2,0,3"/>
   <wangtile tileid="25" wangid="0,3,0,2,0,3,0,3"/>
   <wangtile tileid="26" wangid="0,3,0,3,0,2,0,3"/>
   <wangtile tileid="27" wangid="0,2,0,3,0,3,0,3"/>
   <wangtile tileid="28" wangid="0,3,0,3,0,3,0,2"/>
   <wangtile tileid="29" wangid="0,1,0,4,0,1,0,1"/>
   <wangtile tileid="30" wangid="0,1,0,1,0,4,0,1"/>
   <wangtile tileid="31" wangid="0,4,0,1,0,1,0,1"/>
   <wangtile tileid="32" wangid="0,1,0,1,0,1,0,4"/>
   <wangtile tileid="33" wangid="0,4,0,1,0,1,0,4"/>
   <wangtile tileid="34" wangid="0,1,0,4,0,4,0,1"/>
   <wangtile tileid="35" wangid="0,4,0,4,0,1,0,1"/>
   <wangtile tileid="36" wangid="0,1,0,1,0,4,0,4"/>
   <wangtile tileid="37" wangid="0,4,0,4,0,4,0,4"/>
   <wangtile tileid="38" wangid="0,4,0,1,0,4,0,4"/>
   <wangtile tileid="39" wangid="0,4,0,4,0,1,0,4"/>
   <wangtile tileid="40" wangid="0,1,0,4,0,4,0,4"/>
   <wangtile tileid="41" wangid="0,4,0,4,0,4,0,1"/>
   <wangtile tileid="42" wangid="0,1,0,5,0,1,0,1"/>
   <wangtile tileid="43" wangid="0,1,0,5,0,5,0,1"/>
   <wangtile tileid="44" wangid="0,1,0,1,0,5,0,1"/>
   <wangtile tileid="45" wangid="0,5,0,5,0,1,0,1"/>
   <wangtile tileid="46" wangid="0,1,0,1,0,5,0,5"/>
   <wangtile tileid="47" wangid="0,5,0,1,0,1,0,1"/>
   <wangtile tileid="48" wangid="0,5,0,1,0,1,0,5"/>
   <wangtile tileid="49" wangid="0,1,0,1,0,1,0,5"/>
   <wangtile tileid="50" wangid="0,5,0,1,0,5,0,5"/>
   <wangtile tileid="51" wangid="0,5,0,5,0,1,0,5"/>
   <wangtile tileid="52" wangid="0,1,0,5,0,5,0,5"/>
   <wangtile tileid="53" wangid="0,5,0,5,0,5,0,1"/>
   <wangtile tileid="54" wangid="0,5,0,5,0,5,0,5"/>
   <wangtile tileid="55" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="56" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="57" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="58" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="59" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="60" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="61" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="62" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="63" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="64" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="65" wangid="0,1,0,6,0,1,0,1"/>
   <wangtile tileid="66" wangid="0,1,0,6,0,6,0,1"/>
   <wangtile tileid="67" wangid="0,1,0,1,0,6,0,1"/>
   <wangtile tileid="68" wangid="0,6,0,6,0,1,0,1"/>
   <wangtile tileid="69" wangid="0,1,0,1,0,6,0,6"/>
   <wangtile tileid="70" wangid="0,6,0,1,0,1,0,1"/>
   <wangtile tileid="71" wangid="0,6,0,1,0,1,0,6"/>
   <wangtile tileid="72" wangid="0,1,0,1,0,1,0,6"/>
   <wangtile tileid="73" wangid="0,6,0,1,0,6,0,6"/>
   <wangtile tileid="74" wangid="0,6,0,6,0,1,0,6"/>
   <wangtile tileid="75" wangid="0,1,0,6,0,6,0,6"/>
   <wangtile tileid="76" wangid="0,6,0,6,0,6,0,1"/>
   <wangtile tileid="77" wangid="0,6,0,6,0,6,0,6"/>
   <wangtile tileid="78" wangid="0,6,0,2,0,6,0,6"/>
   <wangtile tileid="79" wangid="0,6,0,2,0,2,0,6"/>
   <wangtile tileid="80" wangid="0,6,0,6,0,2,0,6"/>
   <wangtile tileid="81" wangid="0,2,0,2,0,6,0,6"/>
   <wangtile tileid="82" wangid="0,6,0,6,0,2,0,2"/>
   <wangtile tileid="83" wangid="0,2,0,6,0,6,0,6"/>
   <wangtile tileid="84" wangid="0,2,0,6,0,6,0,2"/>
   <wangtile tileid="85" wangid="0,6,0,6,0,6,0,2"/>
   <wangtile tileid="86" wangid="0,2,0,6,0,2,0,2"/>
   <wangtile tileid="87" wangid="0,2,0,2,0,6,0,2"/>
   <wangtile tileid="88" wangid="0,6,0,2,0,2,0,2"/>
   <wangtile tileid="89" wangid="0,2,0,2,0,2,0,6"/>
   <wangtile tileid="90" wangid="0,6,0,6,0,6,0,6"/>
   <wangtile tileid="91" wangid="0,6,0,6,0,6,0,6"/>
   <wangtile tileid="92" wangid="0,6,0,6,0,6,0,6"/>
   <wangtile tileid="93" wangid="0,3,0,3,0,3,0,3"/>
   <wangtile tileid="94" wangid="0,3,0,3,0,3,0,3"/>
   <wangtile tileid="95" wangid="0,3,0,3,0,3,0,3"/>
   <wangtile tileid="96" wangid="0,2,0,2,0,2,0,2"/>
   <wangtile tileid="97" wangid="0,2,0,2,0,2,0,2"/>
   <wangtile tileid="98" wangid="0,2,0,2,0,2,0,2"/>
   <wangtile tileid="99" wangid="0,1,0,7,0,1,0,1"/>
   <wangtile tileid="100" wangid="0,1,0,7,0,7,0,1"/>
   <wangtile tileid="101" wangid="0,1,0,1,0,7,0,1"/>
   <wangtile tileid="102" wangid="0,7,0,7,0,1,0,1"/>
   <wangtile tileid="103" wangid="0,7,0,1,0,1,0,7"/>
   <wangtile tileid="104" wangid="0,7,0,1,0,1,0,1"/>
   <wangtile tileid="105" wangid="0,7,0,7,0,7,0,7"/>
   <wangtile tileid="106" wangid="0,1,0,1,0,1,0,7"/>
   <wangtile tileid="107" wangid="0,1,0,1,0,7,0,7"/>
   <wangtile tileid="108" wangid="0,1,0,7,0,7,0,7"/>
   <wangtile tileid="109" wangid="0,7,0,7,0,7,0,1"/>
   <wangtile tileid="110" wangid="0,7,0,1,0,7,0,7"/>
   <wangtile tileid="111" wangid="0,7,0,7,0,1,0,7"/>
   <wangtile tileid="113" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="114" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="115" wangid="0,8,0,8,0,8,0,8"/>
   <wangtile tileid="116" wangid="0,8,0,8,0,8,0,8"/>
   <wangtile tileid="117" wangid="0,8,0,8,0,8,0,8"/>
   <wangtile tileid="118" wangid="0,8,0,8,0,8,0,8"/>
   <wangtile tileid="119" wangid="0,8,0,8,0,8,0,8"/>
   <wangtile tileid="120" wangid="0,8,0,8,0,8,0,8"/>
   <wangtile tileid="121" wangid="0,8,0,8,0,8,0,8"/>
   <wangtile tileid="122" wangid="0,8,0,8,0,8,0,8"/>
   <wangtile tileid="123" wangid="0,8,0,8,0,8,0,8"/>
   <wangtile tileid="124" wangid="0,8,0,8,0,8,0,8"/>
   <wangtile tileid="125" wangid="0,8,0,8,0,8,0,8"/>
   <wangtile tileid="126" wangid="0,8,0,8,0,8,0,8"/>
   <wangtile tileid="127" wangid="0,8,0,8,0,8,0,8"/>
   <wangtile tileid="128" wangid="0,8,0,8,0,8,0,8"/>
   <wangtile tileid="129" wangid="0,8,0,8,0,8,0,8"/>
   <wangtile tileid="146" wangid="0,1,0,8,0,1,0,1"/>
   <wangtile tileid="147" wangid="0,8,0,8,0,1,0,1"/>
   <wangtile tileid="148" wangid="0,8,0,1,0,1,0,1"/>
   <wangtile tileid="149" wangid="0,1,0,8,0,8,0,1"/>
   <wangtile tileid="150" wangid="0,1,0,1,0,8,0,1"/>
   <wangtile tileid="151" wangid="0,1,0,1,0,8,0,8"/>
   <wangtile tileid="152" wangid="0,8,0,1,0,1,0,8"/>
   <wangtile tileid="153" wangid="0,1,0,1,0,1,0,8"/>
   <wangtile tileid="154" wangid="0,8,0,1,0,8,0,8"/>
   <wangtile tileid="155" wangid="0,8,0,8,0,1,0,8"/>
   <wangtile tileid="156" wangid="0,1,0,8,0,8,0,8"/>
   <wangtile tileid="157" wangid="0,8,0,8,0,8,0,1"/>
   <wangtile tileid="158" wangid="0,9,0,2,0,9,0,9"/>
   <wangtile tileid="159" wangid="0,9,0,9,0,2,0,9"/>
   <wangtile tileid="160" wangid="0,2,0,9,0,9,0,9"/>
   <wangtile tileid="161" wangid="0,9,0,9,0,9,0,2"/>
   <wangtile tileid="162" wangid="0,2,0,9,0,2,0,2"/>
   <wangtile tileid="163" wangid="0,2,0,9,0,9,0,2"/>
   <wangtile tileid="164" wangid="0,2,0,2,0,9,0,2"/>
   <wangtile tileid="165" wangid="0,9,0,9,0,2,0,2"/>
   <wangtile tileid="166" wangid="0,2,0,2,0,9,0,9"/>
   <wangtile tileid="167" wangid="0,9,0,2,0,2,0,2"/>
   <wangtile tileid="168" wangid="0,9,0,2,0,2,0,9"/>
   <wangtile tileid="169" wangid="0,2,0,2,0,2,0,9"/>
   <wangtile tileid="170" wangid="0,9,0,9,0,9,0,9"/>
   <wangtile tileid="171" wangid="0,3,0,10,0,3,0,3"/>
   <wangtile tileid="172" wangid="0,3,0,10,0,10,0,3"/>
   <wangtile tileid="173" wangid="0,3,0,3,0,10,0,3"/>
   <wangtile tileid="174" wangid="0,10,0,10,0,3,0,3"/>
   <wangtile tileid="175" wangid="0,3,0,3,0,10,0,10"/>
   <wangtile tileid="176" wangid="0,10,0,3,0,3,0,3"/>
   <wangtile tileid="177" wangid="0,10,0,3,0,3,0,10"/>
   <wangtile tileid="178" wangid="0,3,0,3,0,3,0,10"/>
   <wangtile tileid="179" wangid="0,10,0,3,0,10,0,10"/>
   <wangtile tileid="180" wangid="0,10,0,10,0,3,0,10"/>
   <wangtile tileid="181" wangid="0,3,0,10,0,10,0,10"/>
   <wangtile tileid="182" wangid="0,10,0,10,0,10,0,3"/>
   <wangtile tileid="183" wangid="0,10,0,10,0,10,0,10"/>
  </wangset>
 </wangsets>
</tileset>
