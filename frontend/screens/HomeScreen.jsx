import { View, Text, FlatList } from 'react-native'
import React,{useEffect} from 'react'
import axios from "axios";

const HomeScreen = () => {

  // const dataList = [
  //   {
  //     id:1,
  //     title : "First Post",
  //     createdBy : "Raju",
  //     description : "dhegfeshjfgwrgewgfhwfg uiywec eiur werwe rr uwer ewuiruiwrwrwrw"
  //   },
  //   {
  //     id:2,
  //     title : "Second Post",
  //     createdBy : "Kaju",
  //     description : "dhegfeshjfgwrgewgfhwfg uiywec eiur werwe rr uwer ewuiruiwrwrwrw"
  //   },
  //   {
  //     id:3,
  //     title : "Third Post",
  //     createdBy : "Baju",
  //     description : "dhegfeshjfgwrgewgfhwfg uiywec eiur werwe rr uwer ewuiruiwrwrwrw"
  //   },
  //   {
  //     id:4,
  //     title : "First Post",
  //     createdBy : "Raju",
  //     description : "dhegfeshjfgwrgewgfhwfg uiywec eiur werwe rr uwer ewuiruiwrwrwrw"
  //   },
  //   {
  //     id:5,
  //     title : "Second Post",
  //     createdBy : "Kaju",
  //     description : "dhegfeshjfgwrgewgfhwfg uiywec eiur werwe rr uwer ewuiruiwrwrwrw"
  //   },
  //   {
  //     id:6,
  //     title : "Third Post",
  //     createdBy : "Baju",
  //     description : "dhegfeshjfgwrgewgfhwfg uiywec eiur werwe rr uwer ewuiruiwrwrwrw"
  //   },
  //   {
  //     id:7,
  //     title : "First Post",
  //     createdBy : "Raju",
  //     description : "dhegfeshjfgwrgewgfhwfg uiywec eiur werwe rr uwer ewuiruiwrwrwrw"
  //   },
  //   {
  //     id:8,
  //     title : "Second Post",
  //     createdBy : "Kaju",
  //     description : "dhegfeshjfgwrgewgfhwfg uiywec eiur werwe rr uwer ewuiruiwrwrwrw"
  //   },
  //   {
  //     id:9,
  //     title : "Third Post",
  //     createdBy : "Baju",
  //     description : "dhegfeshjfgwrgewgfhwfg uiywec eiur werwe rr uwer ewuiruiwrwrwrw"
  //   },
  // ]

  const [dataList,setDataList] = React.useState();

  const getImpInfo = async () => {
    try{
      // const response = await axios.get(`https://backend-ecamp.vercel.app/api/v1/notice`);
      // console.log(response);
      // setDataList(response);
      axios({
        method: 'get',
        url: `https://backend-ecamp.vercel.app/api/v1/notice`,
      }).then((response) => {
        // console.log(response.data);
        setDataList(response?.data);
      });
    }catch(error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getImpInfo();
  },[]);

  const renderItem = ({item})=>(
    <View className="m-2 p-2 border-b-2 border-r-2">
      <Text className="font-semi-bold text-lg">{item.createdBy}</Text>
      <Text className=''><Text className='text-gray-500'>Title - </Text>{item.title}</Text>
      <Text><Text className='text-gray-500'>Description - </Text>{item.description}</Text>
      <Text><Text className='text-gray-500'>Posted on - </Text> 13 April 2024</Text>
    </View>
  );

  return (
    <View className="flex-1">
      <View className="justify-center items-center mt-4">
        <Text className="font-bold underline">Important Information</Text>
      </View>
      <View className="mx-2">
        <FlatList data={dataList?.data} renderItem={renderItem} keyExtractor={item => item._id} />
      </View>
    </View>
  )
}

export default HomeScreen