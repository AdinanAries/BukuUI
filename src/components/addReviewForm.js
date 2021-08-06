function AddReviewForm(){
    return (
        <div style={{maxWidth: 700, margin: "auto", padding: 10, borderRadius: 10, backgroundColor: "rgba(200,200,255,0.5)", border: "1px solid rgba(0,0,55,0.2)"}}>
            <p style={{fontSize: 14, color: "yellow", fontWeight: "bolder", marginBottom: 10}}>
                Rating</p>
            <div style={{}}>
                <p style={{fontSize: 14, marginBottom: 5, color: "white"}}>select your rating here</p>
                <div class="stars">
                    <form action="">
                        <input class="star star-5" id="star-5" type="radio" name="star"/>
                        <label class="star star-5" for="star-5"></label>
                        <input class="star star-4" id="star-4" type="radio" name="star"/>
                        <label class="star star-4" for="star-4"></label>
                        <input class="star star-3" id="star-3" type="radio" name="star"/>
                        <label class="star star-3" for="star-3"></label>
                        <input class="star star-2" id="star-2" type="radio" name="star"/>
                        <label class="star star-2" for="star-2"></label>
                        <input class="star star-1" id="star-1" type="radio" name="star"/>
                        <label class="star star-1" for="star-1"></label>
                    </form>
                </div>
            </div>
            <p style={{fontSize: 14, color: "yellow", fontWeight: "bolder", marginBottom: 10}}>
                Review</p>
            <textarea style={{minHeight: 40, fontSize: 14, width: "100%", borderRadius: 10, padding: 10, border: "1px solid rgb(244,244,111)", backgroundColor: "rgb(244,244,111)", outline: "none"}}>
                type your review here...
            </textarea>
            <div style={{cursor: "pointer", marginTop: 5, borderRadius: 10, backgroundColor: "darkslateblue", color: "white", textAlign: "center", padding: 10, fontSize: 14}}>
                Submit
            </div>
        </div>
    );
}

export default AddReviewForm;