import { collection, getDocs } from "firebase/firestore";
import { CollectionEnum } from "../../lib/enum/collection/CollectionEnum";
import { db } from "../../lib/firebase";

export async function fetchHasUserFriend(myId: string) {
  const collectionRef = collection(
    db,
    CollectionEnum.USERS,
    myId,
    CollectionEnum.FRIENDS
  );
  try {
    const snapArr = [];
    let hasFriend = false;

    const querySnapshot = await getDocs(collectionRef);
    querySnapshot.forEach((doc) => {
      snapArr.push(doc.data());
    });
    if (snapArr.length > 0) {
      hasFriend = true;
    }
    return { checked: true, hasFriend: hasFriend };
  } catch (e) {
    throw new Error("Error fetch has user friend");
  }
}
