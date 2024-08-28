import streamlit as st
import pandas as pd
#https://easypoems.streamlit.app/

#This is the main streamlit app.  It takes in a set of poems and images and then shows them on the web.
#A button allows you to advance to the next poem.  #Goal is to get two pages to see how navigation looks.

#This is the core data that will be used for example.
#Target is the language that you want to learn.
#Base is your current language.

#Create a dataframe using the lines.
column_names=['key_words','t_lang','b_lang','t_1','t_2','t_3','t_4','b_1','b_2','b_3','b_4']

#Create dummy data for the df.
#This will be replaced by a sql call that converst the output to a df.
row_3=[
  "Put keywords here",
  "German",
  "English",
  "This is first line of target",
  "This is second line of target",
  "This is third line of target",
  "This is fourth line of target",
  "Base poem translation",           
  "Second line translate",
  "Third line",
  "Fourth line"]

row_1=[
"Fork, Bed, Table, House",
"German",
"English",
"Die Gabel liegt auf dem Tisch,",
"Das Bett steht in meinem Haus.",
"Wir essen dort, wir schlafen frisch,",
"Unser Zuhause ist daraus.",
"The fork lies on the table,",
"The bed stands in my house.",
"We eat there, we sleep fresh,",
"Our home is made of it."]

row_2=[
"Tape, Cat, Bread, Dog",
"German",
"English",
"Das Klebeband ist lang und breit,",
"Die Katze jagt die Maus.",
"Das Brot ist lecker, eine Freit,",
"Der Hund ist treu und braus.",
"The tape is long and wide,",
"The cat chases the mouse.",
"The bread is delicious, a treat,",
"The dog is loyal and noisy."]

#Combine the lines into a dataframe
lines_df=pd.DataFrame([row_1,row_2],columns=column_names)
#st.write(lines_df)

if 'lines_row_num' not in st.session_state:
    st.session_state.lines_row_num = 0

#lines_row_num=1

st.title("Let's Learn German!")
st.write("Keywords for this poem")
st.write(lines_df.at[st.session_state.lines_row_num,'key_words'])
#st.write(st.session_state.lines_row_num)

#This is the main text output
st.write(f"""
<span style='color: black; font-weight: bold;'>{lines_df.at[st.session_state.lines_row_num,'t_1']}</span><BR>
<span style='color: lightgray;'>{lines_df.at[st.session_state.lines_row_num,'b_1']}</span><BR>
<span style='color: black; font-weight: bold;'>{lines_df.at[st.session_state.lines_row_num,'t_2']}</span><BR>
<span style='color: lightgray;'>{lines_df.at[st.session_state.lines_row_num,'b_2']}</span><BR>
<span style='color: black; font-weight: bold;'>{lines_df.at[st.session_state.lines_row_num,'t_3']}</span><BR>
<span style='color: lightgray;'>{lines_df.at[st.session_state.lines_row_num,'b_3']}</span><BR>
<span style='color: black; font-weight: bold;'>{lines_df.at[st.session_state.lines_row_num,'t_4']}</span><BR>
<span style='color: lightgray;'>{lines_df.at[st.session_state.lines_row_num,'b_4']}</span><BR>
""",unsafe_allow_html=True)

        

#st.write("count_value")
#st.write(st.session_state.lines_row_num)

                   

# Callback functions
def decrement_counter():
  if st.session_state.lines_row_num > 0: #Dont let the row num get below zero.  Should probably give warning.
    st.session_state.lines_row_num -= 1

def increment_counter():
  if st.session_state.lines_row_num < len(lines_df)-1:
    st.session_state.lines_row_num += 1
   

#Create columns to put the buttons next to eachother
# Create two columns
col1, col2 = st.columns(2)

# Add content to the first column
with col1:
  st.button('Previous Poem', on_click=decrement_counter, key='decrement_btn')

# Add content to the second column
with col2:
  st.button('Next Poem', on_click=increment_counter, key='increment_btn')
  

st.write(st.session_state.lines_row_num)

#Add a rating button, I dont like this because....


  

