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
st.write(lines_df)

if 'count_value' not in st.session_state:
    st.session_state.count_value = 0
lines_row_num=1

st.title("Let's Learn German!")

#This is the main text output
st.write(f"""
<span style='color: black; font-weight: bold;'>{lines_df.at[lines_row_num,'t_1']}</span><BR>
<span style='color: lightgray;'>{lines_df.at[lines_row_num,'b_1']}</span><BR>
<span style='color: black; font-weight: bold;'>{lines_df.at[lines_row_num,'t_2']}</span><BR>
<span style='color: lightgray;'>{lines_df.at[lines_row_num,'b_2']}</span><BR>
<span style='color: black; font-weight: bold;'>{lines_df.at[lines_row_num,'t_3']}</span><BR>
<span style='color: lightgray;'>{lines_df.at[lines_row_num,'b_3']}</span><BR>
<span style='color: black; font-weight: bold;'>{lines_df.at[lines_row_num,'t_4']}</span><BR>
<span style='color: lightgray;'>{lines_df.at[lines_row_num,'b_4']}</span><BR>
""",unsafe_allow_html=True)

        
#Give the session state an initial value:



#st.write(st.session_state['page_num'])
st.write("count_value")
st.write(st.session_state.count_value)
st.markdown(f"{target_lines[st.session_state.count_value][0]}<br>:gray[{base_lines[st.session_state.count_value][0]}]<br>{target_lines[st.session_state.count_value][1]}<br>:gray[{base_lines[st.session_state.count_value][1]}]<br>{target_lines[st.session_state.count_value][2]}<br>:gray[{base_lines[st.session_state.count_value][2]}]<br>{target_lines[st.session_state.count_value][3]}<br>:gray[{base_lines[st.session_state.count_value][3]}]",unsafe_allow_html=True )

#st.markdown(f"{target_lines[1][0]}<br>:gray[{base_lines[0]}]<br>{target_lines[1][1]}<br>:gray[{base_lines[1]}]<br>{target_lines[1][2]}<br>:gray[{base_lines[2]}]<br>{target_lines[1][3]}<br>:gray[{base_lines[3]}]",unsafe_allow_html=True )

                   

# Callback functions
def increment_counter():
    st.session_state.count_value += 1
   
def decrement_counter():
    st.session_state.count_value -= 1

st.button('Increment', on_click=increment_counter, key='increment_btn')
st.button('Decrement', on_click=decrement_counter, key='decrement_btn')
st.write(st.session_state.count_value)



  

