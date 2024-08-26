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
st.markdown(f"{target_lines[0][0]}<br>:gray[{base_lines[0]}]<br>{target_lines[0][1]}<br>:gray[{base_lines[1]}]<br>{target_lines[0][2]}<br>:gray[{base_lines[2]}]<br>{target_lines[0][3]}<br>:gray[{base_lines[3]}]",unsafe_allow_html=True )

st.markdown(f"{target_lines[1][0]}<br>:gray[{base_lines[0]}]<br>{target_lines[1][1]}<br>:gray[{base_lines[1]}]<br>{target_lines[1][2]}<br>:gray[{base_lines[2]}]<br>{target_lines[1][3]}<br>:gray[{base_lines[3]}]",unsafe_allow_html=True )



st.write("What are the advantages of this method?")

st.markdown("*Streamlit* is **really** ***cool***.")
st.markdown('''
    :red[Streamlit] :orange[can] :green[write] :blue[text] :violet[in]
    :gray[pretty] :rainbow[colors] and :blue-background[highlight] text.''')
st.markdown("Here's a bouquet &mdash;\
            :tulip::cherry_blossom::rose::hibiscus::sunflower::blossom:")

multi = '''If you end a line with two spaces,
a soft return is used for the next line.

Two (or more) newline characters in a row will result in a hard return.
'''
st.markdown(multi)

