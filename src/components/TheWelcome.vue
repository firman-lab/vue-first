<script setup>
</script>

<template>
  <main class="w-screen h-screen bg-[rgb(41,35,12)]">
    <div class="container mx-auto">
      <div class="flex h-screen">
        <div class="m-auto">
          <div class="w-[1000px] max-w-4xl p-16 bg-gradient-to-br from-[#3c3b3f] to-[#605c3c] rounded-xl shadow-lg">
            <div class="flex flex-col justify-center items-center">
              <img src="../assets/socrates-logo.png" alt="logo-main" class="max-w-xs" />
              <h3 class="text-xl 2xl:text-2xl font-bold text-white pt-8">Only One Step! Join with us and enjoy the
                benefit.</h3>
              <form class="w-full">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 ">
                  <input type="text" id="fullname"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:border-yellow-900 block w-full p-2.5 placeholder-gray-400"
                    placeholder="Enter Full Name" required>
                  <input type="email" id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:border-yellow-900 block w-full p-2.5 placeholder-gray-400"
                    placeholder="Enter your email" required>
                  <div class="bg-white rounde">
                    <!-- class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:border-yellow-900 block w-full p-2.5 placeholder-gray-400"> -->
                    <vue-tel-input class="h-full !rounded-sm" v-model="phone" mode="international"></vue-tel-input>
                  </div>
                  <input type="text" id="refferalcode"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:border-yellow-900 block w-full p-2.5 placeholder-gray-400"
                    placeholder="Refferal Code" required>
                  <input type="password" id="password"
                    class="bg-gray-50 col-span-2 border border-gray-300 text-gray-900 text-sm rounded-sm focus:border-yellow-900 block w-full p-2.5 placeholder-gray-400"
                    placeholder="Enter Your Password" required>
                  <input type="password" id="confirmpassword"
                    class="bg-gray-50 col-span-2 border border-gray-300 text-gray-900 text-sm rounded-sm focus:border-yellow-900 block w-full p-2.5 placeholder-gray-400"
                    placeholder="Confirm Your Password" required>
                  <select id="countries"
                    class="bg-gray-50 col-span-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400">
                    <option selected class="text-gray-400">Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
