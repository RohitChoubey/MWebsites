<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<%@page import="java.sql.*,java.util.*"%>

<%
	String heading=request.getParameter("heading");
	String text1=request.getParameter("text");
	String totalvac=request.getParameter("totalvac");

	try {
		Class.forName("com.mysql.jdbc.Driver");
		Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/test", "root", "12345");
		Statement st=conn.createStatement();
		int i=st.executeUpdate("insert into users(heading,text1,totalvac)values('"+heading+"','"+text1+"','"+totalvac+"')");
		out.println("Data is successfully inserted!");
		RequestDispatcher rd=request.getRequestDispatcher("index.jsp");
            rd.forward(request, response);
	}
	catch(Exception e) {
		System.out.print("Data Not Insert");
		e.printStackTrace();
	}
%>