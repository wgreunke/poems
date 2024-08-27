import streamlit as st

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
base_lines=["Base poem translation",            
           "Second line translate",
           "Third line",
           "Fourth line"]
st.title("Let's Learn German!")

#Give the session state an initial value:
if 'page_num' not in st.session_state:
    st.session_state['page_num'] = 0

st.write(st.session_state['page_num'])
st.markdown(f"{target_lines[st.session_state['page_num']][0]}<br>:gray[{base_lines[0]}]<br>{target_lines[st.session_state['page_num']][1]}<br>:gray[{base_lines[1]}]<br>{target_lines[st.session_state['page_num']][2]}<br>:gray[{base_lines[2]}]<br>{target_lines[st.session_state['page_num']][3]}<br>:gray[{base_lines[3]}]",unsafe_allow_html=True )

#st.markdown(f"{target_lines[1][0]}<br>:gray[{base_lines[0]}]<br>{target_lines[1][1]}<br>:gray[{base_lines[1]}]<br>{target_lines[1][2]}<br>:gray[{base_lines[2]}]<br>{target_lines[1][3]}<br>:gray[{base_lines[3]}]",unsafe_allow_html=True )

button = st.button('Increment')
l_button=st.button("Left")

if button:
    st.session_state['page_num'] += 1

if l_button:
      st.session_state['page_num'] -= 1

                   
#st.button("Previous Page",onClickLeft) 
#st.button("Next Page",onClickRight)



st.write(st.session_state['page_num'])
  

st.write("What are the advantages of this method?")


