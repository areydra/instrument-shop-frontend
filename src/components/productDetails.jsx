import React from 'react';
import Harp from '../assets/Harp.png'
import AddProduct from './addProduct'

const ProductDetails = () => {
    return ( 
        <div className="row col-md-12" style={{paddingTop : '100px'}}>
            <div className="col-md-4">
                <img src={Harp} alt="COKS"/>
            </div>
            <div className="col-md-8">
                <div className="row">
                    <div className="col-md-8">
                        <h4 style={{fontWeight: 'bold'}}>Product Name</h4>
                    </div>
                    <div className="col-md-4 text-right">
                        <AddProduct action="Edit" class="btn btn-secondary btn-sm mr-1"/>
                        <button className="btn btn-danger btn-sm ml-1">Delete</button>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-md-12">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit dolor magni perferendis harum accusamus odio ipsa, cum itaque distinctio sunt nesciunt quisquam. Ratione, repellendus corporis esse exercitationem quasi dicta distinctio earum delectus nulla, fugit nesciunt impedit ipsa debitis numquam, quis doloribus molestias quae omnis dolore voluptatum non eius repellat? Totam vitae quaerat consequuntur illo. Aliquam quia itaque ipsam placeat ipsum! Nemo facere quasi esse eaque nulla! Minus maiores ab perferendis quaerat, deleniti nihil assumenda debitis temporibus aliquid? Laborum labore in adipisci perspiciatis, expedita nobis natus excepturi minima recusandae magni eum iure distinctio, quo fugit ab! Tenetur inventore exercitationem quia, ut ipsam atque necessitatibus laboriosam, quas expedita sed nesciunt voluptate? Reprehenderit temporibus excepturi iusto commodi maiores, deleniti quis quam, fuga sequi, nihil aliquid? At non maiores exercitationem unde voluptas, voluptatibus reiciendis cumque autem eaque illo reprehenderit ab aperiam corrupti sapiente aut ea est impedit inventore veritatis nobis quasi rerum vel! Excepturi odio explicabo harum provident eligendi, et sit ducimus error dicta debitis vel, corporis aspernatur sint! Dicta culpa dolore molestias et earum fugit, vel inventore eveniet dignissimos. Consectetur natus nisi necessitatibus consequatur. Deserunt totam aut officia? Facere sequi deserunt illum, labore odio fugiat voluptas quasi saepe voluptates repellendus. Illum veniam suscipit officiis autem blanditiis reprehenderit dolorum voluptates voluptatum animi soluta sit possimus, ipsa qui ratione, amet dicta eum modi, in corporis iusto et obcaecati consequatur a! Cupiditate facere quaerat, eveniet dicta, tenetur corporis minus quibusdam quasi nihil perspiciatis at ab et aspernatur quia! Magnam expedita quo nemo, voluptas aperiam repudiandae ducimus.</p>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-md-3">
                        Available in
                    </div>
                    <div className="col-md-5">
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-md-3">
                        Quantity
                    </div>
                    <div className="col-md-5">
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-md-3">
                        Price
                    </div>
                    <div className="col-md-5">
                        <input type="text" className="form-control"/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProductDetails;