//SPDX-License-Identifier:MIT
pragma solidity ^0.8.18;

contract CoffeeDapp{
    uint totalOrders;
    address payable creator;


    constructor(){
        creator= payable(msg.sender);
    }


    struct order{
        address orderAddress;
        uint timestamp;
        string message;
        uint orderId;

    }

     order [] public orderList;

    function buyCoffee(string memory _message) payable public {
        require(msg.value>0,"pay greater than zero");
        totalOrders++;
        order memory Order=order(msg.sender,block.timestamp,_message,totalOrders);
        orderList.push(Order);


    }


    function getList()public view returns(order [] memory){
        return orderList;

    }
}