import { firestore, auth } from '../firebase/firebaseconfig';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { FaPlus, FaMinus } from 'react-icons/fa';
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
		let todaydate = new Date();
		await canteenOrders.add({ ...ele, u_id: uid, createdAt: todaydate });
	};
	const minus_Items = (ele) => {
		canteenOrders.doc(ele.id).delete();
	};
	const [sum, setSum] = useState(0);
	function formatDate(date) {
		var d = new Date(date),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = month;
		if (day.length < 2) day = day;

		return [year, month, day];
	}
	let is_valid = (date) => {
		let today = new Date();
		today = formatDate(today);
		let t = new Date(1970, 0, 1); // Epoch
		t.setSeconds(date);
		let prev = formatDate(t);
		prev[0] -= 1969;
		console.log(today, ' ', prev);
		if (today[0] == prev[0]) {
			if (today[1] == prev[1]) {
				if (today[2] - prev[2] > 1) return 0;
				else return 1;
			} else {
				return 0;
			}
		} else return 0;
	};
	useEffect(() => {
		let tempsum = 0;
		let todaydate = formatDate(new Date());
		orders &&
			orders.map((ele) => {
				if (ele.u_id === uid && is_valid(ele.createdAt)) tempsum += ele.price;
			});
		setSum(tempsum);
	}, [orders]);
	return (
		<div className='canteen-order'>
			<div className='canteen_portal'>COLLEGE CANTEEN PORTAL</div>
			<div className='canteen_container'>
				<div className='bill_amount'> Total Bill {sum}</div>
				<div className='pay'>
					<img src='https://www.linkpicture.com/q/WhatsApp-Image-2022-07-03-at-12.33.44-AM.jpeg' alt='scan' className='pay_bill' />
					<span>scan and pay</span>
				</div>
				<div className='orders_items'>
					<div className='Your_orders'>
						{' '}
						<span>YOUR TOMORROW ITEMS</span>
					</div>
					<div style={{ height: '10px' }}></div>
					<div className='orders_view'>
						{orders &&
							orders.map((ele) => {
								if (ele.u_id === uid && is_valid(ele.createdAt)) {
									return (
										<div className='your_orders_ele'>
											<img src={ele.image} alt='pic' />
											<div className='your_orders_ele_name'>{ele.name}</div>
											<div className='your_orders_ele_price'>{ele.price}</div>
											<div onClick={() => minus_Items(ele)} className='add_icon_item'>
												<FaMinus />
											</div>
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
