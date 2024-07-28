import img1 from '../../src/assets/item1.jpg'

export default function Home(){
    return(
        <>
            <div className="flex bg-transparent">
                <div className="w-full h-svh">
                    <img src={img1} alt="" />
                    {/* <h1>hello</h1> */}
                </div>
                
            </div>
        </>
    )
}