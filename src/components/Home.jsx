import React, {Component} from 'react';
import '../css/home.css'

class Home extends Component {

    render() {
        return (
            <div>
                <div className="bg1">
                    {/* <Navi/> */}
                    <div className="ptext">
                        <span className="border trans">
                            NEW YORK CITY
                        </span>
                    </div>
                </div>

                <section className="section section-light">
                    <h2>ABOUT ME</h2>
                    <p>
                        Please Check out my projects!
                    </p>

                    <h2 className="text-align-center">When I'm not working, you can find me ...</h2>

                    <div className="row">
                        <div className="col sqs-col-3">
                            <i className="profile-icons fa fa-heart-o"></i>
                            <div className="profile-contents"> 
                                Learning new things (currently self-learning Mean Stack), listening to jazz or drinking coffee.
                            </div>
                        </div>

                        <div className="col sqs-col-3">
                            <img className="dancing-icons" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANrSURBVGhD3dpJyE1xGMfxl8wimZJkVsYVokwrC7KQSClKCq9CKUNCWRhKKUWIhWKBwoIsDEUyRGRjxQILkTllnr4/OXk8Pfe83dc99/6vX32S85577/+55/zPf3jfhgplDq7iPd7gFEajrrIVPwKfMBN1kamIisi8RU8kn2OICrCWI/ncRdR4aw+SzxVEjbe2IflsQNR4awqST2fcR1SAnEDdZACuwxbwHYfQEXWVFpiEFViCocgyCHOxCRN0oB6iq6NRfjvO4zXslfqGhUgu6iPrcQ4vYRtdSlPF6GruxmZ00IFq5CiixjYlKqYV1uEDsvP2ovD0gxpkG1gOW8xI3IQ/5wIKzxb4D86jGfFTd0zFHIYmmPa4fMR0FBrdBk/gPzyPRvhh8MVEbmMUCs8sRA3Ik01V8orRldFsQV9UVaKnVNSQPHbOFRVTyFXI+0YGwnbyd7BPmlL85FHFqIPrFtUjvOJXYRe+Qt/YcSzDcGj0VjTY2QYehJa39ljkX2bBGq/OQPO6eziN+WiJMJpORI2QZ1Bhz80xGYuiC9EtF73nEWRf8F/pBj32ohdF7kCpVSEyA2G0DtdApB2R6IXWUijVKmQfdJtrgroaD6BbOzdtMRkbcRG+MN1qnaBUq5DGX//7E83Fyn5fW5geCCOQpVaFKL1+/1uR1LKQiua/KET9JJr0ec0pZAjWYCf0HoUWoqm4b3Sk3ELmwQ8FhRZyCfbDJFotllOIpivabvXvobV/IekP7ZjYD/sCbZPaY1JOIdp9+Qz7+lfogUKiR7H9MNF+sFZ8/ni5t9YiaKzSBPUaxqCQaI4Tbc6NR3v4K9Wczl6VaI/KNlRuIctj2J8lW8h+2IbKAmTxD4EkC2kHPwhqgdQGWQ7A/jzJQvQYtI0UrbVt1sL+PMlCtKCxjdTA1R02s2HPOYtwEVTL+OWuBi/dbjbRBt5KJBXtz/rHq66Azw7YczQnG4ekchm2kSfh0xoazOx5D9EVyUSTOttA9ZMu8OkLP/fSLkgy/UUrRr+jomlFFG0Q+FtR0/Nkkq0TMlrbl4rvL5pcTkQS8Z1eT6neiKL+or9XscU8go4nEd/pV6FU1F9ewJ7fB0nEd/obyMs0ZCs//TY4mfhOr9ulqQyGfomj6X5Syf4CQpvfi3WgnqOtTE1LapCGhp+BwFT2y+55fAAAAABJRU5ErkJggg==" />
                            <div className="profile-contents"> 
                                Learning new things (currently self-learning Mean Stack), listening to jazz or drinking coffee.
                            </div>
                        </div>

                        <div className="col sqs-col-3">
                            part 3
                        </div>

                        <div className="col sqs-col-3">
                            part 4
                        </div>
                    </div>

                </section>

                <div className="bg2">
                    <div className="ptext">
                        <span className="border trans">
                            ATLANTA
                        </span>
                    </div>
                </div>

                <section className="section section-dark">
                    <h2>SKILLS</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium,
                        quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi
                    </p>

                    <div className="row">
                        <div className="col sqs-col-4">
                            part 1
                        </div>

                        <div className="col sqs-col-4">
                            part 2
                        </div>

                        <div className="col sqs-col-4">
                            part 3
                        </div>
                    </div>

                </section>

                <div className="bg3">
                    <div className="ptext">
                        <span className="border trans">
                            SEOUL CITY
                        </span>
                    </div>
                </div>

                <section className="section section-light">
                    <h2>CONTACT</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium,
                        quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi
                    </p>
                </section>

            </div>
        );
    }
}
export default Home;