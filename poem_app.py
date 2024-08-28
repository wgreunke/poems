import streamlit as st
import pandas as pd
#https://easypoems.streamlit.app/

#This is the main streamlit app.  It takes in a set of poems and images and then shows them on the web.
#A button allows you to advance to the next poem.  #Goal is to get two pages to see how navigation looks.

#This is the core data that will be used for example.
keywords=["knife","Apple","Table"]
#Target is the language that you want to learn.
#Base is your current language.
target_lines=[["This is first line of target",
             "This is second line of target",
             "This is third line of target",
             "This is fourth line of target",],
              ["Second poem","sp1","sp2","sp3"]]
base_lines=[["Base poem translation",            
           "Second line translate",
           "Third line",
           "Fourth line"],
            ["a","B","C","D"]]

#Create a dataframe using the lines.
column_names=['t_lang','b_lang','t_1','t_2','t_3','t_4','b_1','b_2','b_3','b_4']

row_1=["German","English","This is first line of target",
            "This is second line of target",
            "This is third line of target",
            "This is fourth line of target",
            "Base poem translation",           
            "Second line translate",
            "Third line",
            "Fourth line"]
lines_df=pd.DataFrame([row_1],columns=column_names)
st.write(lines_df)
st.write(lines_df.at[0,"t_1"])

light_text = "This is the text variable"
bold_text="This is the bold text"
st.markdown(f"<span style='font-weight: bold; color: #B0B0B0;'>{light_text}</span>")
st.markdown(f"<span style='color: #B0B0B0;'>{light_text}</span>")
st.markdown(f"<span style='font-weight: bold; color: #B000000;'>{bold_text}</span>")


#["Second poem","sp1","sp2","sp3"]]




st.title("Let's Learn German!")

#Give the session state an initial value:

if 'count_value' not in st.session_state:
    st.session_state.count_value = 0


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



  

