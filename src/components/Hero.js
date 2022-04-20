import "./Hero.css"

const Hero = () => {
    return(
        <div className="hero_background">
            <div className="hero_content">
                <h1 className="hero_title">I <span>❤</span> Floppa</h1>
                <p className="hero_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aut autem beatae cum debitis facere </p>
                <button className="hero_btn">Over to you</button>
            </div>
            <div className="hero_bottom">
                <div className="text_block">
                    <img src="https://i.kym-cdn.com/photos/images/newsfeed/002/028/689/381.jpg" alt="img"/>
                    <h2>Floppa #1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nobis nulla quae quam. Blanditiis consequuntur cupiditate dolores doloribus eligendi error illum itaque laudantium libero, maiores nam necessitatibus numquam placeat vitae?</p>
                </div>
                <div className="text_block">
                    <img src="https://i.pinimg.com/236x/90/0a/b7/900ab76cf0c3b2fe8683e0e2039beb00.jpg" alt="img"/>
                    <h2>Floppa #2</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nobis nulla quae quam. Blanditiis consequuntur cupiditate dolores doloribus eligendi error illum itaque laudantium libero, maiores nam necessitatibus numquam placeat vitae?</p>
                </div>
                <div className="text_block">
                    <img src="data:image/jpeg;base64,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" alt="img"/>
                    <h2>Floppa #3</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nobis nulla quae quam. Blanditiis consequuntur cupiditate dolores doloribus eligendi error illum itaque laudantium libero, maiores nam necessitatibus numquam placeat vitae?</p>
                </div>
            </div>
        </div>
    )
}

export default Hero;