
<template>
<div class="container flex mx-auto max-w-screen-lg p-4 m-2">
    <div class="container flex flex-row justify-between  max-w-screen-lg mx-auto p-4 m-2 ">
        <div class="flex-col max-w-screen-sm ">
            <h1 class="font-poppins  font-extrabold text-6xl leading-normal py-4">
                ALL FOR <span class="text-[#1FEE1F]">EACH</span>, <span class="text-[#1FEE1F]">Each</span> FOR ALL</h1>
                      <p class="text-[20px] max-w-screen-md -mt-3">Get started and gain access to your balances with just a click of a button</p>
                <button class="text-[15px] mt-5 w-24 h-10 rounded-md text-white font-extrabold bg-[#1FEE1F]">Get Started</button>
            </div>
        <img src="../assets/blackman.png"  class="w-[500px]" />
    </div>
</div>
<!-- Partnership section -->
<div class="flex  max-w-screen-lg mx-auto justify-center font-extrabold m-6">
    <ul class="flex gap-60 text-[#C8C8C8]">
      <li>Ojo Local Government</li>
      <li>Electronic Media Agency</li>
      <li>Konga</li>
    </ul>
</div>
</template>

<script>
export default{
    data(){
        return{
            partnership:{partner:'Ojo Local Government',partner:"Electronic Media Agency",partner:"Konga"}
        }
    }
}
</script>