import React from 'react'
import { NativeWindStyleSheet } from "nativewind";
import { Redirect } from 'expo-router';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function index() {
  return (
    <Redirect href={"/(home)/(tabs)"}/>
  )
}