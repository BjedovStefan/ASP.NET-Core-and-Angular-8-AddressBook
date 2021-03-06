USE [master]
GO
/****** Object:  Database [AddressBook]    Script Date: 11/4/2019 8:31:38 AM ******/
CREATE DATABASE [AddressBook]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'AddressBook', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\AddressBook.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'AddressBook_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\AddressBook_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [AddressBook] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [AddressBook].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [AddressBook] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [AddressBook] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [AddressBook] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [AddressBook] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [AddressBook] SET ARITHABORT OFF 
GO
ALTER DATABASE [AddressBook] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [AddressBook] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [AddressBook] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [AddressBook] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [AddressBook] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [AddressBook] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [AddressBook] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [AddressBook] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [AddressBook] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [AddressBook] SET  ENABLE_BROKER 
GO
ALTER DATABASE [AddressBook] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [AddressBook] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [AddressBook] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [AddressBook] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [AddressBook] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [AddressBook] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [AddressBook] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [AddressBook] SET RECOVERY FULL 
GO
ALTER DATABASE [AddressBook] SET  MULTI_USER 
GO
ALTER DATABASE [AddressBook] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [AddressBook] SET DB_CHAINING OFF 
GO
ALTER DATABASE [AddressBook] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [AddressBook] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [AddressBook] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'AddressBook', N'ON'
GO
ALTER DATABASE [AddressBook] SET QUERY_STORE = OFF
GO
USE [AddressBook]
GO
/****** Object:  Table [dbo].[Contacts]    Script Date: 11/4/2019 8:31:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Contacts](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](20) NOT NULL,
	[LastName] [nvarchar](20) NOT NULL,
	[Address] [nvarchar](30) NOT NULL,
	[PhoneNo] [nvarchar](15) NOT NULL,
 CONSTRAINT [PK_Contacts] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Contacts] ON 

INSERT [dbo].[Contacts] ([ID], [FirstName], [LastName], [Address], [PhoneNo]) VALUES (1, N'Stefan', N'Bjedov', N'Gortanov Trg ', N'0038630730506')
INSERT [dbo].[Contacts] ([ID], [FirstName], [LastName], [Address], [PhoneNo]) VALUES (2, N'Visnja', N'Siljic', N'Vojkovo Nabrezje 12', N'0038630730509')
INSERT [dbo].[Contacts] ([ID], [FirstName], [LastName], [Address], [PhoneNo]) VALUES (3, N'Mari', N'Tucakovic', N'Vracarska 12 ', N'00331144556')
INSERT [dbo].[Contacts] ([ID], [FirstName], [LastName], [Address], [PhoneNo]) VALUES (5, N'Blaz', N'Klemenc', N'Karadjordjeva 56', N'0089333444')
INSERT [dbo].[Contacts] ([ID], [FirstName], [LastName], [Address], [PhoneNo]) VALUES (6, N'Andrija', N'Glisic', N'Glagoljska 8', N'0034567890')
INSERT [dbo].[Contacts] ([ID], [FirstName], [LastName], [Address], [PhoneNo]) VALUES (8, N'Marko', N'Markovic', N'markoviceva 5', N'3456789765')
INSERT [dbo].[Contacts] ([ID], [FirstName], [LastName], [Address], [PhoneNo]) VALUES (11, N'Bivko', N'Nastic', N'Gregoreva 56', N'0089333445')
INSERT [dbo].[Contacts] ([ID], [FirstName], [LastName], [Address], [PhoneNo]) VALUES (12, N'Miha', N'Mihajlovic', N'Mihajjlska 23', N'456789076')
SET IDENTITY_INSERT [dbo].[Contacts] OFF
USE [master]
GO
ALTER DATABASE [AddressBook] SET  READ_WRITE 
GO
