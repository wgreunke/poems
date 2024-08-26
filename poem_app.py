import streamlit as st

#This is the main streamlit app.  It takes in a set of poems and images and then shows them on the web.
#A button allows you to advance to the next poem.  #Goal is to get two pages to see how navigation looks.

#This is the core data that will be used for example.
keywords=["knife","Apple","Table"]
#Target is the language that you want to learn.
#Base is your current language.
target_lines=["This is first line of target",
             "This is second line of target",
             "This is third line of target",
             "This is fourth line of target",]
base_lines=["Base poem translation",
           "Second line translate",
           "Third line",
           "Fourth line"]

st.title("Let's Learn German!")
#Create a for loop that iterates throught the poems
for target_line, base_line in zip(target_lines,base_lines):
  st.write(target_line)
  st.write(base_line)


st.write("This is :blue[test]")



st.write("What are the advantages of this method?")
