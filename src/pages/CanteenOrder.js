import { firestore, auth } from '../firebase/firebaseconfig';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { FaPlus } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import './CanteenOrder.scss';
const CanteenOrder = () => {
	const itemList = firestore.collection('CanteenItemList');
	const canteenOrders = firestore.collection('CanteenOrderList');
	const [orders] = useCollectionData(canteenOrders, { idField: 'id' });
	const [listitem] = useCollectionData(itemList, { idField: 'id' });
	const { uid } = auth.currentUser;
	const addItem = async (ele) => {
		console.log('inside');
		let orderstemp = orders;
		let flag = 0;

		await canteenOrders.add({ ...ele, u_id: uid });
	};
	const [sum, setSum] = useState(0);
	useEffect(() => {
		let tempsum = 0;
		orders &&
			orders.map((ele) => {
				if (ele.u_id === uid) tempsum += ele.price;
			});
		setSum(tempsum);
	}, [orders]);
	return (
		<div className='canteen-order'>
			<div className='canteen_portal'>COLLEGE CANTEEN PORTAL</div>
			<div className='canteen_container'>
				<div className='bill_amount'> Total Bill {sum}</div>
				<div className='orders_items'>
					<div className='Your_orders'>
						{' '}
						<span>YOUR TOMORROW ITEMS</span>
					</div>
					<div style={{ height: '10px' }}></div>
					<div className='orders_view'>
						{orders &&
							orders.map((ele) => {
								if (ele.u_id === uid) {
									return (
										<div className='your_orders_ele'>
											<img src={ele.image} alt='pic' />
											<div className='your_orders_ele_name'>{ele.name}</div>
											<div className='your_orders_ele_price'>{ele.price}</div>
										</div>
									);
								}
							})}
					</div>
				</div>
				<div className='menu_card'>
					<div className='menu_card_heading'>what we cooking tomorrow....</div>
					<div style={{ height: '10px' }}></div>
					<div className='menu_card_listdiv'>
						{listitem &&
							listitem.map((ele) => (
								<div className='canteen_item_div' key={ele.id}>
									<img src={ele.image} alt='image_icon' />
									<div className='name'>{ele.name}</div>
									<div className='price'>{ele.price}</div>
									<div onClick={() => addItem(ele)} className='add_icon_item'>
										<FaPlus />
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};
export default CanteenOrder;
