<template>
    <div class="contact">
        <div class="bgContainerCont lazy vh-100">
            <img class="menuIcon fixed-top" src="https://aneeqbass.github.io/hostedImages_portfolio/images/menuIcon.png"
                alt="menuIcon" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">

            <div class="container m-auto text-center vh-100">
                <div id="contactInfo">
                <div class="pt-5">
                    <h1 id="title">Have a question? Ask me!</h1>
                    <br>
                    <form action="https://formspree.io/f/xvoedoya" method="POST" target="_blank">
                        <div class="row justify-content-center">
                            <div class="col">
                                <input type="text" class="form-control" name="first name" placeholder="First name"
                                    aria-label="First name" required>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" name="lastname" placeholder="Last name"
                                    aria-label="Last name" required>
                            </div>
                        </div>
                        <div class="container text-center">
                            <div class="col-md-3">
                                <label for="validationCustom05" class="form-label">Cellphone Number</label>
                                <input type="text" class="form-control" name="phone" placeholder="eg: 012 345 6789"
                                    required>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" name="mail" id="exampleFormControlInput1"
                                    placeholder="name@example.com" required>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Type your message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="Message"
                                    placeholder="Enter Message Here..."></textarea>
                                <div class="col-12">
                                    <br>
                                    <button class="contactBtn" type="submit">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bgContainerCont {
    background-image: url("https://aneeqbass.github.io/hostedImages_portfolio/images/sunsetBgImg.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 100%;
}
#messageBox {
  height: 100%;
}
input[type="text"] {
  height: 100%;
}
@media (max-width: 490px) {
    #contactInfo{
        padding-top: 30px;
    }
}
</style>