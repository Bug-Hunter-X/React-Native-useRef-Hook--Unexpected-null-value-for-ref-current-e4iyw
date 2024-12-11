```javascript
import React, { useRef, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const MyComponent = () => {
  const myRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (myRef.current) {
        clearInterval(intervalId);
        console.log('Ref is now populated:', myRef.current);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  const handlePress = () => {
    console.log('Ref value:', myRef.current); //Might still be null initially
  };

  return (
    <View>
      <View ref={myRef}>
        <Text>This is my view</Text>
      </View>  
      <Button title="Press me" onPress={handlePress} />
    </View>
  );
};

export default MyComponent;
```